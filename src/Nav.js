import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Nav =()=>{
return(
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <Link className="navbar-brand" exact to="/">Mr_morsalin</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" exact to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/about">About</NavLink>
          </li>
          <li className="nav-item">
            <Link className="nav-link" exact to="/services">Services</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" exact to="/contact">Contact</Link>
          </li>
          <button className="btn btn-outline-info text-light">Add user</button>
        </ul>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>

    </div>
    )
}

export default Nav