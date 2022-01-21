import React, {useEffect, useState} from 'react'
import {Button MO} from"ButtonMondal"
import "./Add.css"
import {Link} from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'


const Add = () => {
    const [Coursliste, setCours] = useState({titre:"",matiere:"",continue:""}) 
    const useReducer = useSelector((state) => state.CoursReducer.Coursliste)
    const [titre, setTitre] = useState("");
    const [matiere, setMatiere] = useState("");
   
 
 
const handleChange=(e)=>{

  e.preventDefault();
  setCours({...Coursliste,[e.target.titre]:e.target.value})
}


    return (
      
      
      <div></div>  
    )  
  
};
 

      
    export default Add