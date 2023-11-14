
import mongoose  from "mongoose";


// create schema
const bookSchema = mongoose.Schema({
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
}, {
  timestamps: true,
}
);


// create book model
export default mongoose.model("Book", bookSchema);




























