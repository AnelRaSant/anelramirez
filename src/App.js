import React from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer/Footer";

import Nav from "./components/Nav";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//Pages
import Home from "./pages/Home"
import AboutMe from "./pages/AboutMe"
import Projects from "./pages/Projects"

function App() {
  return (
    <Router>
     <div>
      <Nav />
      <Switch>
        <Route exact path={["/","/home"]} component={Home}></Route>
        <Route path="/AboutMe" component={AboutMe}></Route>
        <Route path="/Projects" component={Projects}></Route>
      </Switch> 
    </div>
    
    <Footer /> 
   
    </Router>
    
  );
}

export default App;
