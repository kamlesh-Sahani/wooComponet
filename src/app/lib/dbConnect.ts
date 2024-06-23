import mongoose  from "mongoose";

interface connectionType{
    isConnected?:number
}
const connection:connectionType={}
async function dbConnect(){
    if(connection.isConnected){
        console.log("database is already connected ");
        return;
    }
    try {
        const db = await mongoose.connect(process.env.MONGOURI!,{dbName:"wooComponent"});
        connection.isConnected = db.connections[0].readyState;
        console.log(connection.isConnected,"isconnected");
        console.log("database connection successfuly :",db.connection.host);
    } catch (error) {
        console.log("database connection error: ",error);
    }
}

export default dbConnect;