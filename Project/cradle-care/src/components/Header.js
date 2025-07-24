import React from "react";
import { Link } from "react-router"; 

export default function Header() {
  const navbarStyle = {
    height: '80px',
    backgroundColor: 'transparent', 
    padding: '0 1rem',
    backdropFilter: 'blur(8px)',    
    WebkitBackdropFilter: 'blur(8px)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.2)'
  };

  const backgroundStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    backgroundImage: 'url("https://i.pinimg.com/736x/00/6f/75/006f7543d5a9187db93d2530cee4e9b7.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 0.5,
    zIndex: 0
  };

  

  return (
    <>
    <div style={backgroundStyle}>
    <nav style={navbarStyle} className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/home">
          Cradle Care
        </Link>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/prime">
                Prime
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/bot">
               ChatBot
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                SOS
              </Link>
            </li>
          </ul>

          <form className="d-flex" role="search">
             <button className="btn btn-outline-success" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </nav>

    

    </div>

    </>
  );
}
