
const express=require("express");
const router =express.Router();
const bcrypt=require("bcrypt");
const User=require("../models/User");
const jwt=require("jsonwebtoken");
const {loginRules,registerRules,validation  } = require("../middleware/validator");
const isAuth=require("../middleware/passport");
//router.get ("/", (req, res) =>{
   // res.send("hello world");
//});

//register
router.post("/register",registerRules(),validation,async(req,res) =>{
    const{name, lastName ,email, password}=req.body;
try {
    const newUser = new User ({name, lastName ,email, password})

   // check if  the email exist
   const searchedUser=await User .findOne({email})
   if (searchedUser){
       return res.status(400).send({msg:"email already exist"});
   }
    //hash password

    const salt = 10;
    const genSalt= await bcrypt.genSalt(salt);
    const hashedPassword=await bcrypt.hash(password,genSalt);
    console.log(hashedPassword)
    newUser.password=hashedPassword;
    //generate a token
   
    //save user
    const newUserToken= await newUser.save();
    const payload={
        _id:newUserToken.id,
        name:newUserToken.name,
    };
    const token=await jwt.sign(payload,process.env.SecretOrkey,{
        expiresIn:3600,
     });
     //send the user

        res.status(200).send({user:newUserToken, mes: "user is saved",token:`Bearer${token}`});
    
} catch (error) {
    res.status(500).send("can not save the user")
    console.log(error)
    
}
});

//login
router.post("/login",loginRules(),validation ,async(req,res)=>{
    const{ email,password}=req.body
    try {
     //find if the user exist
     const searchedUser= await User.findOne({email});
     //if the email exist
     if(! searchedUser){
         return  res.status(400).send({msg:"bad Credential"})
     }
     //password are equals
     const match=await bcrypt.compare(password,searchedUser.password);
      
     if(!match){
         return res.status(400).send({msg:"bad Credenteil"});

     }
     //creer un token
     const payload={
         _id:searchedUser.id,
         name:searchedUser.name,
     };
     const token= await jwt.sign(payload,process.env.SecretOrkey,{
        expiresIn:3600,
     });
     
      //send the user
      res.status(200).send({user:searchedUser,msg:"success",token:`Bearer${token}`});
    } catch (error) {
        res.status(500).send({msg:"can not get tha user"});
        
    }
});


router. get("/current",isAuth(),(req,res)=>
{
 res.status(200).send({user:req.user});   
});

module.exports=router;