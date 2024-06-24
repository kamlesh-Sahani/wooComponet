import dbConnect from "@/app/lib/dbConnect";
import ComponentCodeModel from "@/models/ComponentCode";
import { NextResponse,NextRequest } from "next/server";

export async function POST(req:NextRequest){
    try {
        await dbConnect();
        const reqBody = await req.json();
        const {title,subTitle,code,isPaid,installation,subscriptionType} = reqBody;
        if(!title || !subTitle || !code  ){
            return NextResponse.json({
                message:"please fill the all Fields ",
                success:false
            },{status:400})
        }
        let newComponent;
        if(!installation){
            newComponent = new ComponentCodeModel({
                title,
                subTitle,
                code,
                isPaid:isPaid!=""?isPaid:false,
                subscriptionType
                
            })
        }else{
            newComponent = new ComponentCodeModel({
                title,
                subTitle,
                code,
                isPaid:isPaid!=""?isPaid:false,
                installation,
                subscriptionType
            })
        }
        if(!newComponent){
            return NextResponse.json({
                message:"faild to upload component",
                success:false
            },{status:400})
        }
        const component =await newComponent.save()
        return NextResponse.json({
            message:"component upload successfuly",
            success:true
        },{status:201})
       
    } catch (error) {
        return NextResponse.json({
            message:"error is code storing",
            success:false
        },{status:500})
    }
}