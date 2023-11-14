import express from "express";
import { createbook } from "../controllers/bookController.js";



// init router 
const router = express.Router();
 
// routes
router.post("/book", createbook); 


// export default router
export default router;




















