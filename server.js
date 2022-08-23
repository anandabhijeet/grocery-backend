import express from "express";
import dotenv from "dotenv";
dotenv.config();
import "./Database/db_connection.js";
import router from "./Routes/routes.js";
import cors from "cors";


const port = 5000;
const app = express();
app.use(express.json());
app.use(cors());
app.use(router);


app.listen(port, ()=>{
    console.log(`server is running on ${port}`);
})