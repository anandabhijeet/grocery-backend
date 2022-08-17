import express from "express";
import dotenv from "dotenv";
dotenv.config();
import "./Database/db_connection.js";
import router from "./Routes/routes.js";
import cors from "cors";

const port = 5000;
const app = express();
app.use(express.json());
// Add headers before the routes are defined
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use(router);
app.use(cors());



app.listen(port, ()=>{
    console.log(`server is running on ${port}`);
})