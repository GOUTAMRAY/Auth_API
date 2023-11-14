import { createProductSlug, getRandomUniqueID } from "../helpers/helper.js";
import fs from "fs";

/**
 * 
 * get all product
 */
export const getAllProduct = (req, res) => {
 // get all product 
 const productData = JSON.parse(fs.readFileSync("db/product.json").toString());

// check  product data 
if (productData.length === 0) {
  res.status(404).json({ message : "Product data not Found"});
};

 res.status(200).json({ products : productData});
};


/**
 * 
 * get all product
 */
export const createProduct = (req, res) => {
   const { name, regularPrice, salePrice, stock } = req.body;

// validation 
if (!name || !regularPrice || !salePrice ) {
  return res.status(400).json({ message: "Product name & Price is required"});
};

// get all product 
 const productData = JSON.parse(fs.readFileSync("db/product.json").toString());


 // product name check 
 if (productData.some(data => data.slug === createProductSlug(name))) {
    return res.status(400).json({ message : "Product Already Exisist"});
 };

 const product = {
  id: getRandomUniqueID(),
  name, 
  slug: createProductSlug(name),
  regularPrice, 
  salePrice, 
  stock, 
  photo : req.file.filename,
 };

 // push product 
 productData.push(product);

 fs.writeFileSync("db/product.json", JSON.stringify(productData));

  res.status(200).json({ product,  message : "product created successfull"});
};

/**
 * 
 * get single product 
 */
export const getsingleProduct = (req, res) => {
  const { slug } = req.params;

// get all product 
const productData = JSON.parse(fs.readFileSync("db/product.json").toString());

// get single product 
 const singleProduct = productData.find(data => data.slug === slug);

 // check single product 
 if (!singleProduct) {
  res.status(404).json({ message : "Single product not Found"});
 }
 res.status(200).json(singleProduct);
}

/**
 * 
 * delete product data 
 */
export const deleteProduct = (req, res) => {
   const { id } = req.params;

// get all product 
const productData = JSON.parse(fs.readFileSync("db/product.json").toString());

// find deleted data
  const updatedData = productData.filter(data => data.id !== id);

  fs.writeFileSync("db/product.json", JSON.stringify(updatedData));


  res.status(200).json({ message : "Product data deleted successfull"});
};




