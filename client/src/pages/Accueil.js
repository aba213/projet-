import React ,{useState}from "react";
import ReactStars from 'react-rating-stars-component';
import "./Accueil.css"
import {Link}from"react-router-dom"
import img from"../assets/img.jpg";
import image5 from"../assets/image 5.png"
import img1 from"../assets/img1.jpg"
import image7 from"../assets/image 7.png"
import image14 from"../assets/image 14.png"
import image9 from"../assets/image 9.png"
import image46 from"../assets/image 46.png"
import { Button } from '../components/Button/Button';

function Accueil(ens) {
    const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
    return (
        <div className="first">
   <img className="im" src={img} alt="img" />
                 
 <h1 className="par">Bienvenue sur le site FAHAMNI</h1>
      <p className="parg">
                        FAHAMNI est  la premiere platfome qui  aide les éléves , étudients , parents et les insructeurs pour avoir les tous  aides  pour reusssir.
Notre mission est de raprocher  les personnes les talenteuses du public pour assurer une large diffusion des connaissances et des compétences  pratiques.
                           
                          
FAHAMNI est un site tunisien qui propose des cours de soutien aux élèves de différents niveaux et spécialisations .Il
 met  des cours et des applications identiques aux programmes officiels tunisiens.
Ce sont des enseignements complets et variés dans diverses matières (arabe, français, anglais, mathématiques, sciences de la vie et de la terre, sciences physiques, éducation islamique...).
FAHAMNI propose également des formations en langues (français, anglais, allemand, italien...) via l'application Google meet ou Zoom,
le participant pouvant faire une première séance d'essai gratuite pour déterminer le niveau et se familiariser avec le enseignant ou professeur.
                            </p>
      
<h1 className="par1">Comment ca en marche</h1>
    
  <div className="ims"><img className="box" src={image5} alt="img" />
  <img className="box" src={img1} alt="img" />

   <img className="box" src={image7 } alt="img" /></div>
     <div className="p-container">
          

          <ul className={click ? "p-menu active" : "p-menu"}>
          <li className="p-item">
                <Link  to="/Annonces" activeClassName="active"
               
 >
            <a href="#">Annonces</a></Link>
             

                              
              </li>
              <p className="pr">  
                        Vous etes un éléves ,étudient ou parents
vous trouvez une diffecutlés à comprendre les cours ,exercices  ou matiere 
vous pouver d’avoir dec cours dans dommaines presis</p>
            <li className="p-item">
                <Link  to="/Cantact" activeClassName="active" >
    
            <a href="#">Cantact</a> </Link>
           
              </li>
              <p className="pr"> les instructeurs ou les 
   enseignants vous  contacte pour rependre a votre  annonce.</p>
              <li className="p-item">
              
   <Link  to="/Convention" activeClassName="active"
               
 >
            <a href="#">Convention</a> </Link>
           
              </li>
              <p className="pr">votre besoin sera satisfaiit dans  le deali et le cout presise.</p><br/>
            
          </ul>
          </div>
     
                 <div className="par2">
          Témoignages
          <div className="tem">
        <p className="pr1">"fahamni est vraiment au-delà de nos exigences .elle surpasse ses taches
et recherche continuellement des solutions pour mon fils.je n’ai que des fécilitations à lui faire .elle est vraiment incroyable" </p>
<img className="immm" src={image14} alt="img" />

</div>
<div className="tem1">
  <p className="pr2">j’ai beaucoup apprécié la rapidité d’exécution de l’équipe meme si j’étais à la dereniére minute.
Haute efficacité et excellentes portions</p>
  <img className="immm1" src={image9} alt="img" />
</div>
<div className='hero-btns'>
<Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
           <Link  to="/Témoignages" activeClassName="active" >
                  


       voir plus<a href="#">
 </a></Link>
          
        </Button>
        </div>
        

          
         
          </div>
         
          </div>


























        
          
      

    
      
                   
            
    


      


    );
}
export default Accueil;