import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

// Global configuration
const mongoURL = process.env.MONGO_URL;
// console.log(mongoURL);
const db = mongoose.connection;

// Connect to Mongo
mongoose.connect(mongoURL);
mongoose.connection.once('open', () => {
    console.log('connected to mongo');
});

export default db;