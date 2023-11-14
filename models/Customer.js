
import mongoose  from "mongoose";


// create schema
const customerSchema = mongoose.Schema({
  name : {
    type : String,
    trim : true,
    required : true,
  },
  age : {
    type : Number,

  },
  email :  {
    type : String,
    trim : true,
    unique :true,
  },
  location : {
    type : String,
    trim : true,
    required : true,
  },
  photo : {
    type : String,
    default : null,
  },
  gender: {
    type : String,
    trim : true,
    enum : ["Male", "Female", "Custom"]
  },
  cell : {
    type : String,
    trim : true,
    required : true,
    unique : true,
  },
 status : {
  type : Boolean,
  default : true,
 }
}, 
);


// create customer model
export default mongoose.model("Customer", customerSchema);














