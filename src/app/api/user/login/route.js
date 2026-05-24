import bcrypt from "bcrypt";
import User from "../../../../../models/user";
import { v4 as uuidv4 } from "uuid";

export async function POST(req) {

 try{

  let {email, password}= await req.json();
  let UserExist= await User.findOne({email});
  if(!UserExist || !email || !password || !UserExist.isVerified) {
      return new Response(
        {
          message:
            "User does'nt exists or information is not completed! Please recheck your provided info or signup(verify)",
        },
        { status: 400 },
      );
  }

  let isCorrect=await bcrypt.compare(password, UserExist?.password);
  if(!isCorrect) {
    return new Response(
      {
        message: "Incorrect password. Please try again",
      },
      { status: 400 },
    );
  }else{
    let accessToken= uuidv4();
    const sevenDaysInMs = 7 * 24 * 60 * 60 * 1000;
    let accessTokenExpiry= new Date(Date.now() + sevenDaysInMs);
    UserExist.accessToken=accessToken;
    UserExist.accessTokenExpiry= accessTokenExpiry;
    let isSaved= UserExist.save();
    if(isSaved) {
        return new Response(
      {
        message: "Access Granted",
        accessToken
      },
      { status: 200 },
    );
    }else{
        return new Response(
      {
        message: "Something went wrong. Please try again",
      },
      { status: 500 },
    );
    }
  }


 }catch(err){

   return new Response(
      {
        message: err.message,
      },
      { status: 500 },
    );
 }

}