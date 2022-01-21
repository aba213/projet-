import { Route,redirect } from "react-router-dom";
import {useSelector} from 'react-redux'
import React from "react"
//import { useReducer } from'../../reducers/User/User';

const PrivateRoute=({ element:element,...rest})=>{
const isAuth=localStorage.getItem("token");
const user = useSelector(state => state.userReducer.user)
if(isAuth){

    if(user.isAdmin){
return<Route element={element}{...rest}/>;
    }
    }
    return
<redirect path="/"/>;

    
    
}
export default PrivateRoute