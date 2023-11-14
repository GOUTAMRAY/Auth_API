
import express from "express";
import { createcustomer , getAllCustomer, getsingleCustomer, deleteCustomer, updateCustomer} from "../controllers/customerController.js";
import { createCustomerMulter } from "../utilis/multer.js";  



// init router 
const router = express.Router();



// routes
router.get("/customer", getAllCustomer); 
router.get("/customer/:id", getsingleCustomer); 
router.delete("/customer/:id", deleteCustomer); 
router.patch("/customer/:id",createCustomerMulter, updateCustomer); 
router.post("/customer", createCustomerMulter, createcustomer); 



//export router 
export default router;
   













