import express from "express";
import { createProduct, deleteProduct, getAllProduct, getsingleProduct } from "../controllers/productController.js";
import { createProductMulter } from "../utilis/multer.js";

// init router 
const router = express.Router();


// products routes 
router.get("/product", getAllProduct);
router.get("/product/:slug", getsingleProduct);
router.delete("/product/:id",  deleteProduct);
router.post("/product", createProductMulter, createProduct); 




//export router 
export default router; 











