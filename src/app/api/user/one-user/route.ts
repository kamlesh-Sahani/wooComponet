import UserModel from "@/models/User";
import {NextResponse,NextRequest} from 'next/server';

export async function GET(req:NextRequest){
    try {
        const searchParams = req.nextUrl.searchParams;
        const id = searchParams.get("id");
        const user = await UserModel.findById(id);
        if(!user){
            return NextResponse.json({
                message:"user is not found | id is wrong",
                success:false
            },{status:400})
        }

        return NextResponse.json({
            message:"User found successfully",
            success:true,
            user
        },{status:200})
    } catch (error) {
        return NextResponse.json({
            message:"error to fething the user",
            success:false
        },{status:500})
    }
}