
import multer from "multer";


// multer setup 
const storage = multer.diskStorage({
  destination : (req, file ,cb)=> {
     if (file.fieldname == "staffPhoto") {
       cb(null, "public/staff");
     }else if(file.fieldname == "customerPhoto"){
      cb(null, "public/customer");
     }else if(file.fieldname == "studentPhoto"){
      cb(null, "public/student");
     }else if(file.fieldname == "userPhoto"){
      cb(null, "public/user");
     }else if(file.fieldname == "usercv"){
      cb(null, "public/userCv");
     }else if(file.fieldname == "productPhoto"){
      cb(null, "public/product");
     }

  },
  filename : (req, file, cb ) => {
     cb(null, Date.now() + "_" + Math.floor(Math.random() * 100000 ) +"_"+ file.originalname );
  }
});



// multer middlwares 
export const createCustomerMulter = multer({ storage,
   fileFilter: (req, file,cb ) => {
     if(file.mimetype === "image/jpeg" ||
        file.mimetype === "image/png" ||
        file.mimetype === "image/jpg" || 
        file.mimetype === "image/webp"
     ){
        cb(null, true);
     }else{
      cb(new Error("Invalid file type"))
     }
} ,
limits : {
  fileSize : 1024 * 1024 
},
}).single("customerPhoto");
// staff multer 
export const createStaffMulter = multer({ storage }).single("staffPhoto");
// student multer 
export const createStudentMulter = multer({ storage }).array("studentPhoto", 10);
// user multer 
export const createUserMulter = multer({ storage }).fields([
  {
    name : "userPhoto",
    maxCount : 1,
  },
  {
    name : "usercv",
    maxCount : 1,
  },
]);

// product multer
export const createProductMulter = multer({ storage }).single("productPhoto");
 









