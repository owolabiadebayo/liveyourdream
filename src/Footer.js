import React from 'react'
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer style={{ backgroundColor: "indigo" , marginTop: "40px" }}>
    <section class="section p-5">
      <div>
        <div class="container">
          <div class="row align-items-center justify-content-md-center">
            <div class="col-md-6">
              <ul class="nav nav-footer text-center justify-content-center">
                <li class="nav-item">
                  {" "}
                  <Link
                    to="/"
                    class="nav-link text-white px-5 text-white fs-4"
                  >
                    {" "}
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  {" "}
                  <Link
                    to="/about"
                    class="nav-link text-white px-5 text-white fs-4"
                  >
                    About
                  </Link>
                </li>
                <li class="nav-item ">
                  {" "}
                  <Link
                    to="/contact"
                    class="nav-link text-white px-5 text-white fs-4"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
              <div class="copyright bg-secondary text-center lead p-2 text-white fs-6">
                Copyright ©2023 i2Reality All Rights Reserved
              </div>
  </footer>
  )
}

export default Footer