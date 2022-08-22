import express from "express";
import { getGroceries, getCategories } from "../Controllers/eventControllers.js";

var router = express.Router();

router.get("/getGroceryProducts", getGroceries);
router.get("/getCategory", getCategories);

export default router;
