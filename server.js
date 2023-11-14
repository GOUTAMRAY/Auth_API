
import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import studentRouter from "./routes/student.js";
import staffRouter from "./routes/staff.js";
import userRouter from "./routes/user.js";
import customerRouter from "./routes/customer.js";
import productRouter from "./routes/product.js";
import bookRouter from "./routes/book.js";
import teamRouter from "./routes/team.js";
import { mongodbConnection } from "./config/mongodb.js";


// env variable
dotenv.config();

// port config 
const PORT = process.env.PORT || 6060;


// init express 
const app = express();

// middleware support 
app.use(express.json());
app.use(express.urlencoded({ extended : false}));


// static folder
app.use(express.static("public"));


// apps routes
app.use(studentRouter);
app.use(staffRouter);
app.use(userRouter);
app.use(customerRouter);
app.use(productRouter);
app.use(bookRouter);
app.use(teamRouter);




// listen server
app.listen(PORT , () => {
  mongodbConnection(), 
  console.log(`Server is running on port ${PORT}`.bgGreen.black);   
});





















