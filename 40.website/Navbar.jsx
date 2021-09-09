import React from "react"
import { NavLink } from "react-router-dom";
import "./index.css"
const Navbar=()=>{
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light container-fluid">
        <div className="row">
            <div className="col-10 mx-auto" ></div>
        </div>
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="#">Thapa techinical</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="#">Link</NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink className="nav-link" to="/services">Servies</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/contract">Contract</NavLink>
        </li>
      </ul>
      
   
    </div>
  </div>
</nav>

        </>
    )
}
export default Navbar;