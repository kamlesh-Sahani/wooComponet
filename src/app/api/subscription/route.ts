import dbConnect from "@/app/lib/dbConnect";
import UserModel from "@/models/User";
import {NextResponse,NextRequest} from 'next/server';

export async function POST(req:NextRequest){
    try {
        await dbConnect();
        const reqBody = await req.json();
        const {type,days,email} = reqBody;
        if(!type || !days || !email){
            return NextResponse.json({
                message:"please  fill all fields",
                success:true
            },{status:400})
        }
        const user = await UserModel.findOne({email});
        if(!user){
            return NextResponse.json({
                message:"user is not found",
                success:false
            },{status:400})
        }
        const subscriptionObj:{subsDays:number,subsType:string} = {
            subsDays:days,
            subsType:type
        }
        user.subscriptions.push(subscriptionObj)
        const startDate = new Date();
        const endDate = new Date(startDate.getTime() + (days * 24 * 60 * 60 * 1000));

        // Update active subscription
        user.activeSubscription.startDate = startDate;
        user.activeSubscription.endDate = endDate;

        await user.save();
        return NextResponse.json({
            message:`${user.userName} thanks for subscription`,
            success:true
        },{status:201})

    } catch (error) {
        return NextResponse.json({
            message:"Error in Subscription",
            success:true
        })
    }
}