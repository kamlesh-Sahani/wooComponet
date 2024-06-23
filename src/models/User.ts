import mongoose,{Schema,Document} from "mongoose";

interface SubscriptionType{
    subsDays:number,
    subsType:string
}
interface ActiveSubscriptionType{
    startDate:Date,
    endDate:Date
}
export interface UserType extends Document{
    email:string,
    userName:string,
    subscriptions:SubscriptionType[],
    activeSubscription:ActiveSubscriptionType
} 
const userSchema:Schema<UserType>  = new Schema({
    userName:{
        type:String,
        required:[true,"Please enter the username"]
    },
    email:{
        type:String,
        required:[true,"please enter the email"],
        unique:true,
        match: [/.+@.+\..+/, "Please enter a valid email address"],
        
    },
    subscriptions:[{
        subsDays:{
            type:Number,
            enum:[10,30,60,90,365] // days
        },
        subsType:{
            type:String,
            enum:["silver","gold","diamond"] // types
        }
    }],
    activeSubscription:{
        startDate:Date,
        endDate:Date
    }

},{timestamps:true});


const UserModel = mongoose.models.User as mongoose.Model<UserType> || mongoose.model<UserType>("User",userSchema);
export default UserModel;