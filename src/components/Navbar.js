import React from 'react'
import PropTypes from 'prop-types'

 {/*import { Link} from 'react-router-dom'*/}
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg  bg-${ props.mode} navbar-${ props.mode}`}>
       <div className="container-fluid">
           <a className="navbar-brand" href="#">{props.title}</a>
           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
           </button>
           <div className="collapse navbar-collapse" id="mybox">
              <u1 className="navbar-nav me-auto mb-2 mb-lg-0">
   
                 <li className="nav-item">
                    <a className="nav-link" href="#">Home</a>
                 </li>
                 
                 {/*<li className="nav-item">
                    <a className="nav-link" href="/about">about</a>
                 </li>
                  <li className="nav-item">

                     <a className="nav-link" href="/">{props.aboutText}</a>
  </li>*/}
             </u1>
              <form className="d-flex">
                 <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                 <button className="btn btn-primary" type="submit">Search</button>
  </form>
              <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleMode} id="flexSwitchCheckDefault"></input>
                <label className="form-check-label"htmlfor="flexSwitchCheckDefault">enable dark</label>
             </div>
       </div>
    </div>
  </nav>
  )
}
Navbar.propTypes ={
    title:PropTypes.string,
    AboutText:PropTypes.string
}