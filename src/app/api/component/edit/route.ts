import ComponentCodeModel, { InstallationType } from "@/models/ComponentCode";
import { NextResponse, NextRequest } from "next/server";

interface ComponentObjType{
    title?:string,
    subTitle?:string,
    code?:string,
    isPaid?:boolean,
    installation?:InstallationType,
    subscriptionType?:string,
}
export async function POST(req: NextRequest) {
  try {
    const reqBody = await req.json();
    const {
      title,
      subTitle,
      code,
      isPaid,
      installation,
      subscriptionType,
      componentId,
    } = reqBody;
    const component = await ComponentCodeModel.findById(componentId);
    if (!component) {
      return NextResponse.json(
        {
          message: "componet is not found",
          success: false,
        },
        { status: 400 }
      );
    }
    const componentObj:ComponentObjType={};
    if(title){
       componentObj.title=title;
    }
    if(subTitle){
        componentObj.subTitle=subTitle;
    }
    if(code){
        componentObj.code=code;
    }
    if(isPaid){
        componentObj.isPaid=isPaid;
    }
    if(installation){
        componentObj.installation=installation;
    }

    if(subscriptionType){
        componentObj.subscriptionType=subscriptionType;
    }
    await ComponentCodeModel.findByIdAndUpdate(componentId,componentObj,{new:true})

    return NextResponse.json({
        message:"successfuly modified",
        success:true
    },{status:200})
  } catch (error) {
    return NextResponse.json(
      {
        message: "error on modifing the component",
        success: false,
      },
      { status: 500 }
    );
  }
}
