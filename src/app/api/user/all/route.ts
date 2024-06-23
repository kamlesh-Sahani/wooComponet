import UserModel from "@/models/User";
import {NextResponse} from 'next/server';
export async function GET(){
    try {
        const users = await UserModel.find({});
        if(!users){
            return NextResponse.json({
                message:"users is not found",
                success:false
            },{status:400})
        }
        return NextResponse.json({
            message:"users found successfuly",
            success:true,
            users
        },{status:200});
    } catch (error) {
        return NextResponse.json({
            message:"error in fetching users",
            success:false
        },{status:500});
    }
}