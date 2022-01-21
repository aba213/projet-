import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {getusers,postuser} from '../../../JS/actions/user/user'
import './userprofil.css'
function Userprofil() {
  const dispatch = useDispatch()
  const user = useSelector(state => state.userReducer.user)
    return (
        <div>
            <div id="main-card">
        <div className="cover-photo" />
        <div className="photo">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARkAAAC0CAMAAACXO6ihAAAAYFBMVEXR1dr////N09fS09j///3U1NrT1Nv//v/O1Nj7+/z39/jN0dfQ0dfa297u7/DW2Nzj5+nm6Orw7/He4eTo7vH5/v7r6u7k5Onv8/XZ2d7p6enz+Prb4ePw7/LW19jU2t2fgRK2AAAFqElEQVR4nO2d65aqMAyFWwoIlIvIcXS8jO//lke8zFGPqG0DgQ3fmr+zbPcKTZOmqRATExMTExMTExMTExMTQ0Kf/iYuhKEQnqeLqirLPC/LKhMe95j6gVLFPN/KW7YrxT0qdjxR5XEthu/7t9rE1ZjtJgjUbi2b+DPiFUeVcaMu0pf7cVpNoA5/mmU5sxij1Sj19U6Xo9XMxyeNt3vxHd1IUwTcI+2YdPOBLjV5yj3UblGJ9N+rciIrCuFF3APuCi/5UJYL23IkIYPa+p9ajLxuABfcg+" alt="" />
        </div>
        <div className="content">
          <h2 className="name"> {user.name} {user.lastName} </h2>
          <h3 className="email">
            {user.email}
          </h3>
          <Link to={{pathname:"/edituser", state:{user} }}><button
          onClick={()=>{dispatch(postuser(user));dispatch(getusers())}}>edit</button>  </Link> 
  
        </div>
        {/* <div className="contact">
          <ul>
            <a href="https://www.linkedin.com/in/abdeladhim-abbassi-5026b0120/" target="_blank">
              <i className="fa fa-linkedin" />
            </a>
            <a href="https://github.com/Adhouma" target="_blank">
              <i className="fa fa-github" />
            </a>
            <a href="https://codepen.io/Adhouma/" target="_blank">
              <i className="fa fa-codepen" />
            </a>
          </ul>
        </div> */}
      </div>

        </div>
    )
}

export default Userprofil