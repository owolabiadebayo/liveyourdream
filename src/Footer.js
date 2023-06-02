import React from 'react'
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer style={{ backgroundColor: "indigo" , marginTop: "40px" }}>
    <section class="section p-5">
      <div>
        <div class="container">
          <div class="row align-items-center justify-content-md-between">
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
              <div class="copyright text-center text-white fs-4">
                Copyright ©2023 i2Reality All Rights Reserved
              </div>
            </div>
            <div class="col-md-6">
              <ul class="nav nav-footer mt-3 justify-content-center">
                <li class="nav-item">
                  <Link
                    to="http://"
                    target="_blank"
                    class="badge badge-circle badge-soci mr-3"
                  >
                    <i
                      class="fa-brands fs-1 fa-twitter"
                      style={{ color: "#ffffff" }}
                    ></i>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    to="http://"
                    target="_blank"
                    class="badge badge-circle badge-soci mr-3"
                  >
                    <i
                      class="fa-brands fs-1 fa-instagram"
                      style={{ color: "#ffffff" }}
                    ></i>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    to="http://"
                    target="_blank"
                    class="badge badge-circle badge-soci mr-3"
                  >
                    <i
                      class="fa-brands fs-1 fa-linkedin-in"
                      style={{ color: "#ffffff" }}
                    ></i>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    to="http://"
                    target="_blank"
                    class="badge badge-circle badge-soci mr-3"
                  >
                    <i
                      class="fa-brands fs-1 fa-facebook-f"
                      style={{ color: "#ffffff" }}
                    ></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </footer>
  )
}

export default Footer