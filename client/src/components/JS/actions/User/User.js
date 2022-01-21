import axios from "axios";
import { LOAD_USER,REGISTER_USER,LOGIN_USER,FAIL_USER, CURRENT_USER, LOGOUT_USER } from "../../const/User/user";




export const registerUser=(user)=> async(dispatch) =>{
    dispatch({type:LOAD_USER});
    try {
      let result=await axios.post("/user/register",user)//(newUser,mgs,token)
    //localStorage.setItem("token",result.data.token)
    console.log(result.data)
  dispatch({type:REGISTER_USER,payload:result.data}); 
      
    } catch (error) {
      console.log(error)
      const {errors,msg}=error.response.data;
      if( Array.isArray(errors))
      {errors.forEach(err=>alert(err.msg));}
      //  dispatch({type: FAIL_USER,playload:error.response.data});
        
    }
};

export const loginUser=(user,navigate)=> async (dispatch) =>{
    dispatch({type:LOAD_USER});
    try {
      const result= await axios.post("/user/login",user)
      //(newUser,mgs,token)
     dispatch({type:LOGIN_USER,payload:result.data}); 
  navigate.push("/dashbord") ;   
    } catch (error) {
      console.log(error)
      const {errors,msg}=error.response.data;
     if( Array.isArray(errors))
     {errors.forEach(err=>alert(err.msg));}
if(msg){
  alert(msg);
}
        
    }
};

export const current=()=>async dispatch=>{
  dispatch({type:LOAD_USER})
  const options={
    headers:{
      authorization:localStorage.getItem("token")
    }
  }
  try {
   let result= await axios.get("/user/current",options)
   //user
   dispatch({type:CURRENT_USER,playload:result.data.user});
  } catch (error) {
    dispatch({type: FAIL_USER,playload:error.response.data});
  }

};
export const logout=()=>{
  return{
    type:LOGOUT_USER
  }
}