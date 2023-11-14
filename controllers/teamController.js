

import { createProductSlug } from "../helpers/helper.js";
import Team  from "../models/Team.js";


/**
 * Get all customer 
 * @param {
* } req 
* @param {*} res 
*/
export const createTeam = async (req, res) => {
   const { name }= req.body;


 // create book
 const data = await Team.create({
  name, 
  slug : createProductSlug(name),
 });

 res.status(200).json(data);  

}; 
















