import express from "express";
import { createStaff } from "../controllers/staffController.js";
import { createStaffMulter } from "../utilis/multer.js";


// init router 
const router = express.Router();
 
// routes
router.post("/staff",createStaffMulter, createStaff); 


// export default router
export default router;
















