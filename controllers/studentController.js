import Student from "../models/Student.js";

/***
 * 
 * create student
 */
export const createStudent = async (req, res) => {

  const data = new Student({ ...req.body })
    
   await data.save();

    res.status(200).json(req.body);
};

/**
 * 
 * get all student 
 */
export const getAllStudent = async (req, res) => {
   const data = await Student.find();

    res.status(200).json(data);

};
/**
 * 
 * get all student 
 */
export const updateStudent = async (req, res) => {
   const { id } = req.params;
   const { name, roll, location } =req.body;


   const stu = await Student.findById( id );

   stu.name = name,
   stu.roll = roll,
   stu.location = location,


   stu.save(); 

    res.status(200).json(stu); 

}; 








