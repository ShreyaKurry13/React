import React from "react";
import { Link } from "react-scroll"; 

export default function Header() {
  const navbarStyle = {
    height: '80px',
    backgroundColor: 'transparent', 
    padding: '0 1rem',
    backdropFilter: 'blur(8px)',    
    WebkitBackdropFilter: 'blur(8px)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.2)'
  };

  // const navigate = useNavigate();
  
  return (
    <> 
    <nav style={navbarStyle} className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Cradle Care
        </Link>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Prime
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
               ChatBot
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
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

    </>
  );
}
