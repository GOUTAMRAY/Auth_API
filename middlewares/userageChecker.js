

// middlewares
export const ageCheck = (req, res, next) => {
  if(req.body.age > 21){
    next();
  }else{
    res.status(400).json({ message : "You are not allow"});
  }

   
}; 












