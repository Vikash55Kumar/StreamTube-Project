import express from 'express'
import cors from "cors"
import bodyParser from "body-parser"
import cookieParser from 'cookie-parser';

const app=express();
app.use(cors({
    origin:process.env.CORES_ORIGIN,
    credentials:true
}))

app.use(express.json({limit:"20kb"}))
app.use(express.urlencoded({extended:true, limit:"20kb"}))
app.use(express.static("public"))
app.use(bodyParser.json());
app.use(cookieParser())

//routers import 
import userRouter from "./routes/user.route.js"

//router declaration
app.use("/api/v1/users", userRouter)

// http://localhost:8080/api/v1/users/register
// http://localhost:8080/api/v1/users/login

export {app}