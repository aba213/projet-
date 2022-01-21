import React,{useState} from 'react'
import { Button } from '../componnents/Button/Button';
// import './EditProduct.css'
import {useDispatch} from "react-redux"
import {edituser} from '../../../JS/actions/user/user'
import {Link} from 'react-router-dom'


function Edituser(props) {
    
    const dispatch = useDispatch()
    const [name, setname] = useState(props.location.state.user.name)
    const [lastName, setlastname] = useState(props.location.state.user.lastName)
    const [email, setemail] = useState(props.location.state.user.email)
    
    return (
        <div className="editposts">
           
        <label htmlFor="fname">Name</label>
        <input type="text" id="fname" name="name"  value={name}  onChange={(e)=>setname(e.target.value)} />

        <label htmlFor="lname">lastName</label>
        <input type="text" id="lname" name="lastName"  value={lastName}  onChange={(e)=>setlastname(e.target.value)} />

        <label htmlFor="country">email</label>
        <input type="text" id="lname" name="email"   value={email}  onChange={(e)=>setemail(e.target.value)} />

        
        <Link to ='/admin'>
       <button onClick={()=> {dispatch(edituser(props.location.state.user._id,{name,lastName,email}))}}> Edit </button>
       </Link>
      
        </div>
    )
}

export default Edituser