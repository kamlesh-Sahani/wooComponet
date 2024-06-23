import dbConnect from "@/app/lib/dbConnect";
import UserModel from "@/models/User";
import { NextRequest,NextResponse } from "next/server";

export  async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const reqBody = await req.json();
    const {userName,email} = reqBody;
    if(!userName || !email){
        return NextResponse.json({
            message:"username or email is not found",
            success:false
        },{status:400})
    }
    const userExist = await UserModel.findOne({email,userName});
    if(userExist){
        return NextResponse.json({
            message:"Login successfuly",
            success:true,
            userExist
        },{status:200})
    }
    const newUser = new UserModel({
        userName,
        email
    })
    if(!newUser){
        return NextResponse.json({
            message:"Faild to register User",
            success:false
        },{status:400})
    }

    const user = await newUser.save();
    return NextResponse.json({
        message:"Register successfuly",
        success:true,
        user
    },{status:201})
  } catch (error) {
    console.log("login and register error: ", error);
    return NextResponse.json(
      {
        success: false,
        message: "login and register error",
      },
      { status: 500 }
    );
  }
}
