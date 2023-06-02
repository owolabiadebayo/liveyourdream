import { Link } from "react-router-dom"


function Navbar(){
    return (
        <>
         <nav class="navbar navbar-expand-lg navbar-light navbar-transparent" >
        <div class="container-fluid align-items-center d-flex justify-content-between" >
          <img 
            src="./images/logo.jpg"
            className="rounded-circle"
            style={{ width: "70px", marginLeft: "1rem"}}
            alt=""
          />
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
        <div class="collapse navbar-collapse col-6" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mx-5 mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link text-dark fs-5 border-bottom border-danger m-2" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link text-dark fs-5 border-bottom border-danger m-2" to="/about">
                About
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link text-dark fs-5 border-bottom border-danger m-2" to="/contact">
                Contact
              </Link>
            </li>

            <li class="nav-item mx-5">
              <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <Link
                  to="/submit"
                  class="btn fs-5 py-2 px-4 py-3 text-white m-md-2"
                  style={{ backgroundColor: "#e7077d" }}
                  type="button"
                >
                  Submit Script
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
        
        </>
    )
}  
export default Navbar;