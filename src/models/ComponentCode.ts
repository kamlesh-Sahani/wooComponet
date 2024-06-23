import mongoose, { Schema, Document } from "mongoose";

interface InstallationType {
  title: string;
  code: string;
}

enum SubscriptionType {
  Free = "free",
  Silver = "silver",
  Gold = "gold",
  Diamond = "diamond",
}

export interface ComponentCodeType extends Document {
  title: string;
  subTitle: string;
  code: string;
  isPaid: boolean;
  installation?: InstallationType[];
  subscriptionType: SubscriptionType;
}
const componentCodeSchema: Schema<ComponentCodeType> = new Schema(
  {
    title: {
      type: String,
      required: [true, "please Enter the Title"],
    },
    subTitle: {
      type: String,
      required: [true, "please enter the subTitle"],
    },
    code: {
      type: String,
      required: [true, "please entert the code"],
    },
    isPaid: {
      type: Boolean,
      default: false,
    },
    subscriptionType: {
      type: String,
      enum: Object.values(SubscriptionType),
      default: SubscriptionType.Free,
    },
    installation: [
      {
        title: String,
        code: String,
      },
    ],
  },
  { timestamps: true }
);

const ComponentCodeModel =
  (mongoose.models.ComponentCode as mongoose.Model<ComponentCodeType>) ||
  mongoose.model<ComponentCodeType>("ComponentCode", componentCodeSchema);

export default ComponentCodeModel;

