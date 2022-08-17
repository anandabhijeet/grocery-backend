import express from "express";
import { getGroceries } from "../Controllers/eventControllers.js";



var router = express.Router();

router.get("/getGroceryProducts", getGroceries);

export default router;
