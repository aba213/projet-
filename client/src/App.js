import { useEffect } from "react";
import NavBar from"./components/NavBar/NavBar"
import Accueil from "./pages/Accueil";
import Signup from "./components/Signup/Signup";
import {Routes,Route,Link} from "react-router-dom";
import Dashbord from"./components/Dashbord/Dashbord";
import PrivateRoute from "./components/router/privateRoute";
import { current } from "./components/JS/actions/User/User";
import Contact from "./pages/Contact";
import Cours from "./pages/Cours";


import Enseignents from "./pages/Enseignents";
import Footer from"./components/Footer/Footer"

// 
import "./App.css";
import { useDispatch } from "react-redux";
import ListeCours from "./pages/ListeCours";

function App() {
    
  const dispatch = useDispatch();
  useEffect(() => {
  //dispatch (current());
  }, [])
  return (
    <div className="App">

   <NavBar/>

      <Routes>
       
        <Route exact path ="/Signup" element ={<Signup/>}/>
        <Route exact  path ="/" element={ <Accueil/>}/>
        <Route exact path ="/Contact" element={ <Contact/>}/>
        <Route exact path ="/Enseignents" element={ <Enseignents/>}/>
        <Route exact path ="/Cours" element={ <ListeCours/>}/>
        <Route exact path ="/Dashbord" element={ <Dashbord/>}/>
        <Route exact path ="/cardcours" element={<Cours/>}/>
       
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
