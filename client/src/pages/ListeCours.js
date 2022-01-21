import {useDispatch, useSelector} from 'react-redux';
import React, { useEffect } from 'react';
import {getCours  } from "../components/JS/actions/Cours/Cours";
import { Button } from '../components/Button/Button';

import { deleteCours } from '../components/JS/actions/Cours/Cours';

const ListeCours = () => {
    const dispatch=useDispatch();
    const Coursliste =useSelector(state=>state.CoursReducer.Coursliste)
    console.log(Coursliste);

    useEffect(()=>{
        dispatch(getCours())
    },[dispatch]
    )
  return <div style={{display:"flex",flexWrap:"warp",justifyContent:"space-around"}}>
    
<Button className="bt" > add Cours</Button> 
     {Coursliste?(Coursliste.map((el)=><div >
       <div className="card1">
        < div className="card_img1">{el.titre}</div>
        <div className="card__title1">{el.matiere}</div>
        <a className="card__title1"  href={el.continue}>see more</a>
        </div>
     
        <div className=' two btn'>
          <Button >
            Edite
          </Button>
          <Button style={{color:'red'}} onClick={()=>{dispatch(deleteCours(el._id
));dispatch(getCours())}}>
            Delete
          </Button>
        </div>
      

                
 </div>)):<h1>loading</h1>}




        
        
     
      </div>
};


export default ListeCours;
