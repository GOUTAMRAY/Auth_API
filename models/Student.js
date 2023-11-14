
import mongoose  from "mongoose";


// create schema
const studentSchema = mongoose.Schema({
  name : {
    type : String,
    trim : true,
    required : true,
  },
  roll : {
    type : String,
    trim : true,
    
  },
  books : {
     type : [mongoose.Schema.Types.ObjectId],
     ref : "Book",
     default : [],
  },
  team : {
     type : mongoose.Schema.Types.ObjectId,
     ref : "Team",
     default : null,
  },
  location : {
    type : String,
    trim : true,
 
  },

 status : {
  type : Boolean,
  default : true,
 }
}, 
);


// create student model
export default mongoose.model("Student", studentSchema);

















