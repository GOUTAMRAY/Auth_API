import Customer from "../models/Customer.js";


/**
 * 
 * get all customer 
 */

export const getAllCustomer = async (req, res) => {
    const data = await Customer.find();
    // check student
   if(data.length === 0){
    return res.status(404).json({ message : "No data found "}); 
   };

    res.status(200).json(data);  
};


/**
 * Get all customer 
 * @param {
 * } req 
 * @param {*} res 
 */
export const createcustomer = async (req, res) => {
  const { name , age, cell, email, location, gender }= req.body;


// file manage 
let customerPhoto = "";

if (req.file.filename) {
  customerPhoto = req.file.filename;
 }; 

  // create customer 
 const data = await Customer.create({ name , age, cell, email, location, gender, photo: customerPhoto });  

  res.status(200).json(data); 
};  


/***
 * 
 * get single customer 
 */
 export const getsingleCustomer = async (req, res) => {
  const { id } = req.params;

  const data = await Customer.findById(id);
  
  res.status(200).json(data); 
 };

/***
 * 
 *delete  customer 
 */
 export const deleteCustomer = async (req, res) => {
  const { id } = req.params;

  const data = await Customer.findByIdAndDelete(id);

  res.status(200).json({ message : "Customer deleted successfull"}); 
 }

/***
 * 
 * update customer 
 */
 export const updateCustomer = async (req, res) => {
  const { id } = req.params;
  const { name , age, cell, email, location, gender }= req.body;

  const data = await Customer.findByIdAndUpdate(id, {name, age}, { new: true});

  res.status(200).json({ message : "Customer updated successfull"}); 
 }



















