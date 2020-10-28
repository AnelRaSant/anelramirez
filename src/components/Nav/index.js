import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark border border-dark bg-dark">
    <div className="container">
       {/* <img src="" alt="ARS" style={{width: "100px"}}/> */}
        <div className="navbar navbar-expand-lg ">
      <a className="navbar-brand" href="/">
        ANEL RAMÍREZ SANTIAGO
      </a>
    </div>
      {/* </Link> */}
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
     
      <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul className="navbar-nav ml-auto mr-sm-2 mt-2 mt-lg-0">
          <li className="nav-item mr-3">
            <Link className="nav-link" to="/Home">Home</Link>
          </li>
          <li className="nav-item mr-3">
            <Link  className="nav-link" to="/Projects">Projects</Link>
          </li>
          <li className="nav-item mr-3">
            <Link className="nav-link" to="/AboutMe">About Me</Link>
          </li>
          </ul>
          </div>
    
          </div>
         



    
    </nav>
  );
}

export default Nav;
