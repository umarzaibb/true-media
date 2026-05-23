import User from "../../../../../models/user";

export async function POST(req) {
   try{
     let {emailToken, email} =await req.json();
    
    let user= await User.findOne({email});
    if( user?user?.isVerified: false || !emailToken ) {
        return new Response({
            message: 'User already exists or information is not completed! Please recheck your email or login.'
        }, {status: 400})
    }

    if(user.emailToken== emailToken && user.emailTokenExpiry>Date.now()) {
        user.isVerified= true;
        let isUserSaved=user.save();
        if(isUserSaved) {
         return new Response({
            message: 'User Created!'
        }, {status: 201})
       }
    }else{
         return new Response({
            message: 'Invalid token!'
        }, {status: 400})
    }
   }
   catch(err){
        return new Response({
            message: err.message
        }, {status: 500})
    }
}