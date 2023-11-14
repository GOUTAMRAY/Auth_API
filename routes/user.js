
import express from "express";
import { createuser } from "../controllers/userController.js";
import { createUserMulter } from "../utilis/multer.js";


// init router 
const router = express.Router();


// routes

router.post("/user",createUserMulter, createuser);



//export router 
export default router;  















