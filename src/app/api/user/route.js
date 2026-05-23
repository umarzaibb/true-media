import nodemailer from 'nodemailer';
import User from "../../../../models/user";
import bcrypt from 'bcrypt';
import generateEmailTemplate from '../../../../utils/emailTemplate';

function generateSixDigitNumber() {
  return Math.floor(100000 + Math.random() * 900000);
}

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "umarzzaib2@gmail.com",
    pass: process.env.EMAIL_PASSWORD
  }
});

function getMailOptions(email, code) {

    return {
  from: process.env.NODE_ENV.MY_EMAIL,
  to: email,
  subject: 'Your Verification Code',
  html: generateEmailTemplate(code) 
}
}

export async function POST(req) {
    try {
        let {email, password}=await req.json();
    
    let isUserExist=await User.findOne({email});
    if( isUserExist?isUserExist?.isVerified: false || !email || !password) {
        return new Response({
            message: 'User already exists or information is not completed! Please recheck your email or login.'
        }, {status: 400})
    }

    let saltRounds=10;
    let hashedPassword= await bcrypt.hash(password, saltRounds);
    let code= generateSixDigitNumber();
    const now = new Date();
    const futureDate = new Date(now.getTime() + 5 * 60000);
    let user;
    if(isUserExist) {
      isUserExist.password= hashedPassword;
      isUserExist.emailToken= code;
      isUserExist.emailTokenExpiry= futureDate;
      isUserExist.isVerified=false;
      user=isUserExist;
    }else{ 
       user=new User({email, password: hashedPassword, emailToken: code, isVerified: false, emailTokenExpiry: futureDate});
    }

    transporter.sendMail(getMailOptions(email,code), function(error, info){
  if (error) {
    console.log("Error while sending email");
    throw error;
  }
});
    let isUserSaved=user.save();
       if(isUserSaved) {
         return new Response({
            message: 'User Created!'
        }, {status: 201})
       }
    
    }catch(err){
        return new Response({
            message: err.message
        }, {status: 500})
    }
}