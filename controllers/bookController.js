
import { createProductSlug } from "../helpers/helper.js";
import Book  from "../models/Book.js";


/**
 * Get all customer 
 * @param {
* } req 
* @param {*} res 
*/
export const createbook = async (req, res) => {
   const { name }= req.body;


 // create book
 const data = await Book.create({
  name, 
  slug : createProductSlug(name),
 });

 res.status(200).json(data);  

}; 













