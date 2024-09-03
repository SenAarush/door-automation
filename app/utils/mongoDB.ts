import mongoose from "mongoose";

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI as string)
        console.log('MongoDB connected')
    }
    catch(err){
        console.log('MongoDB connection failed')
        console.log(err)
    }
}

export default connectDB

