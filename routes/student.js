
import express from "express";
import { createStudent, getAllStudent,updateStudent } from "../controllers/studentController.js";


// init router 
const router = express.Router();
 

// Routes
router.post("/student", createStudent);
router.get("/student", getAllStudent);
router.patch("/student/:id", updateStudent);


// export default router 
export default router;
















