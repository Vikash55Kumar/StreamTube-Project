import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config()

connectDB();





















/*

import express from 'express'
const app=express();
// function connectDB();

(async() => {
    try {
        await mongoose.connect(`${process.env.MONODB_URI}`/{DB_NAME})
        app.on("error", () => {
            console.log("ERROR", error);
            throw error
        })
        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port: ${PORT}`);
        })

    } catch (error) {
        console.error("ERROR: ", error)
        throw error
    }
})();

*/