import React ,{useState}from"react";
import "./Enseignents.css";
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'
import ReactStars from 'react-rating-stars-component';
import image46 from"../assets/image 46.png"
import img10 from"../assets/img10.png"
import img2 from"../assets/img2.png"
import img3 from"../assets/img 3.png"
import img4 from "../assets/img4.png"
import img200 from "../assets/img200.jpg"
import img201 from "../assets/img201.jpg"
import img5 from "../assets/img5.png"
import {Link}from"react-router-dom"
import { Button } from '../components/Button/Button';

function Enseignents(ens) {
    const [ratingValue, setRatingValue] = React.useState(0);


    return (
<div>
<h1 className="trer"> Nous Enseignents</h1>


        <div className="second">


            <div className="card">
                <img className="card_img" src={image46} alt="img" /><br />

                <div className="card__title">Ali ben Salah</div> <br />
                <div className="card__body">Ingenieur informatique</div><br />
                <ReactStars
                    value={ens.rate}
                    edit={false} />
            </div>

            <div className="card">
                <img className="card_img" src={img5} alt="img" /><br />
                <div className="card__title">Houda kassem</div>
                <div className="card__body">

                    a partir de 10D/H<br />
                    proffesseurs chemie physique</div>
                <ReactStars
                    value={ens.rate}
                    edit={true} />
            </div>
            <div className="card">
                <img className="card_img" src={img10} alt="img" /><br />
                <div className="card__title">Bassma chalbi</div>
                <div className="card__body">(5avis)<br />
                    a partir de 10D/H<br />
                    doctorat en anglais
                </div>
                <ReactStars
                    value={ens.rate}
                    edit={true} />
            </div>


            <div className="card">
                <img className="card_img" src={img3} alt="img" /><br />
                <div className="card__title">jamel ben Ali </div>


                <div className="card__body">professeur en economie gestion</div>
                <ReactStars
                    value={ens.rate}
                    edit={true} />
            </div>

            <div className="card">
                <img className="card_img" src={img2} alt="img" /><br />
                <div className="card__title">Mohamed mahmod</div>
                <div className="card__body">(10avis)<br />
                    a partir de 10D/H<br />
                    ensignant  de Math </div>
                <ReactStars
                    value={ens.rate}
                    edit={true} />
            </div>



            <div className="card">
                <div className="card_img" /><br />
                <div className="card__title">Alla  el bahi</div>

                <div className="card__body">
                    Maitersse en école premiere</div>
                <ReactStars
                    value={ens.rate}
                    edit={true} />



            </div>
            <>


                <div className="card">
                    <img className="card_img" src={img200} alt="img" /><br />
                    <div className="card__title">Bassma ben Ali</div>
                    <div className="card__body">

                        a partir de 10D/H<br />
                        enseignente  de littérature</div>
                    <ReactStars
                        value={ens.rate}
                        edit={true} />
                </div>
                <div className="card">
                    <img className="card_img" src={img201} alt="img" /><br />
                    <div className="card__title">Ahlem Marzoug</div>
                    <div className="card__body">(5avis)<br />
                        a partir de 15D/H<br />
                        professeur en science natuelle
                    </div>
                    <ReactStars
                        value={ens.rate}
                        edit={true} />
                </div>
                <div className='hero-btns'>
<Button
          className='btns'
     
          buttonSize='btn--large'
        >
           <Link  to="/Contact" activeClassName="active" >
                  


      <div className="cv">réjoindre à notre équipe</div><a href="#">
 </a></Link>
          
        </Button>
        </div>

            </>
        </div>

        </div>



    );

}
export default Enseignents