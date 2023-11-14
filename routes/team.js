
import express from "express";
import { createTeam } from "../controllers/teamController.js";


// init router 
const router = express.Router();
 
// routes
router.post("/team", createTeam); 


// export default router
export default router; 














