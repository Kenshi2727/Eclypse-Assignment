import express from "express"
import checkoutHandler from "../controllers/listen.controller.js";

const router = express.Router();//creating a router

router.get("/", checkoutHandler);


export default router;