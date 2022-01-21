import React from 'react'
import './profil.css'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {postPosts} from '../../../JS/actions/Posts/Posts'
import {getusers,postuser} from '../../../JS/actions/User/User'

// import Modal from '../../Modal'
import Add from '../../AddPosts/Add'




function Profil() {
  const dispatch = useDispatch()
  const user = useSelector(state => state.userReducer.user)
    return (
        <div className="bodyprofil">
           <div className="container">
        <div className="main-body">
          {/* Breadcrumb */}
          {/* <nav aria-label="breadcrumb" className="main-breadcrumb">
            <ol className="breadcrumb">
              <Link to='/profi'></Link>
              <li className="breadcrumb-item active" aria-current="page">  </li>
            </ol>
          </nav> */}
          {/* /Breadcrumb */}
          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              <div className="cardadmin3">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width={150} />
                    <div className="mt-3">
                      <h4>Kossay</h4>
                      <p className="text-secondary mb-1">Full Stack Developer</p>
                      <p className="text-muted font-size-sm">cité Enour Gabes</p>
                    </div>                      
                  </div>
                </div>
              </div>
              
            </div>
            

            <div className="col-md-8">
              <div className="card mb-3">
                <div className="card-body2">
                  <div className="row1">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Full Name   &nbsp;</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    allaa mohamed
                    </div>
                   
                  </div>
                  
                  <hr />
                  
                  <div className="row2">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp;&nbsp; kossay@gmail.com
                    </div>
                  </div>
                  <hr />
                  <div className="row3">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Phone&nbsp;&nbsp;</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;
                      51744236
                    </div>
                  </div>
                  <hr />
                  <div className="row4">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Mobile&nbsp;&nbsp;&nbsp;&nbsp;</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      9528741536
                    </div>
                  </div>
                  <hr />
                  <div className="row5">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Address&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; immeuble elyasamin gabes 
                    </div>
                  </div>
                  <hr />
                  <div className="row6">
                    <div className="col-sm-12">
                      {/* <a className="btn btn-info " target="__blank" href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills">Modifier</a> */}
                      <Link to={{pathname:"/editadmin", state:{user} }}><button
          onClick={()=>{dispatch(postuser(user));dispatch(getusers())}}>edit</button>  </Link> 
  
                    </div>   
                    </div>
                  <div className="grp-btn">
          <Link to="/add" > <button className="btn btn-primary" onClick={dispatch(postPosts() )}>  Ajouter pdt</button></Link>
          {/* <Link to="/" > <button className="btn btn-primary" >  Acceuil</button> </Link> */}
                  {/* <button className="btn btn-primary" onClick={dispatch(postPosts())}>    Ajouter post</button> */}
    </div>
      <br></br>
      <br></br>
                </div>

              </div>


              </div>

            </div>
          </div>
        </div>


  </div>



    )
}

export default Profil