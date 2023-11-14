
import mongoose  from "mongoose";


// create schema
const teamSchema = mongoose.Schema({
  name : {
    type : String,
    trim : true,
    required : true,
  },
  slug : {
    type : String,
    trim : true,
    required : true,
  },
 status : {
  type : Boolean,
  default : true,
 }
}, 
{
  timestamps : true,
}
);


// create team model
export default mongoose.model("Team", teamSchema);











