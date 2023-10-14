import {ConnectionOptions} from "mongodb"
import mongoose from 'mongoose';

export const connectDB = async () => {
    await mongoose.connect(process.env.MONGO_URI!);
    console.log('MongoDb is in the space');
}