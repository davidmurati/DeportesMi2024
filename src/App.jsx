import { useState, useEffect  } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch  } from "react-router-dom";
import Home from "./Component/Home/Home";

import Ajedrez from "./Component/Disciplinas/Ajedrez";
import Atletismo from "./Component/Disciplinas/Atletismo";
import Badminton from "./Component/Disciplinas/Badminton";
import BaloncestoF from "./Component/Disciplinas/BaloncestoF";
import BaloncestoM from "./Component/Disciplinas/BaloncestoM";
import Beisbol from "./Component/Disciplinas/Beisbol";
import Esgrima from "./Component/Disciplinas/Esgrima";
import Futbol_campo from "./Component/Disciplinas/Futbol_campo";
import FutbolS from "./Component/Disciplinas/FutbolS";
import Karate from "./Component/Disciplinas/Karate";
import Natacion from "./Component/Disciplinas/Natacion";
import PentatlonM from "./Component/Disciplinas/PentatlonM";
import OrientacionM from "./Component/Disciplinas/OrientacionM";
import Softbol from "./Component/Disciplinas/Softbol";
import TiroFusil from "./Component/Disciplinas/TiroFusil";
import TiroPistola from "./Component/Disciplinas/TiroPistola";
import VoleibolF from "./Component/Disciplinas/VoleibolF";
import VoleibolM from "./Component/Disciplinas/VoleibolM";


function App() {


  
  return (
    <div className="container">
    <Router>
     <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/ajedrez">
          <Ajedrez />
        </Route>
        <Route exact path="/Atletismo">
          <Atletismo />
        </Route>
        <Route exact path="/Badminton">
          <Badminton />
        </Route>
        <Route exact path="/BaloncestoF">
          <BaloncestoF />
        </Route>
        <Route exact path="/BaloncestoM">
          <BaloncestoM />
        </Route>
        <Route exact path="/Beisbol">
          <Beisbol />
        </Route>
        <Route exact path="/Esgrima">
          <Esgrima />
        </Route>
        <Route exact path="/FutbolC">
          <Futbol_campo />
        </Route>
        <Route exact path="/FutbolS">
          <FutbolS />
        </Route>
        <Route exact path="/Karate">
          <Karate />
        </Route>
        <Route exact path="/Natacion">
          <Natacion />
          </Route>
        <Route exact path="/OrientacionM">
          <OrientacionM />
        </Route>
        <Route exact path="/PentatlonM">
          <PentatlonM />
        </Route>
        <Route exact path="/Softbol">
          <Softbol />
        </Route>
        <Route exact path="/TiroFusil">
          <TiroFusil />
        </Route>
        <Route exact path="/TiroPistola">
          <TiroPistola />
        </Route>
        <Route exact path="/VoleibolF">
          <VoleibolF />
        </Route>
        <Route exact path="/VoleibolM">
          <VoleibolM />
        </Route>
     </Switch>
     </Router>
    </div>
  )
}

export default App
