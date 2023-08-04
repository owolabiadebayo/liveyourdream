import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#16324F", marginTop: "40px" }}>
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
              <div className="col">
                <a href=" https://instagram.com/i2_reality?igshid=MzRlODBiNWFlZA==">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    size="2x"
                    className="text-white me-3"
                  />
                </a>
                <a href=" https://twitter.com/_i2reality?t=M9P-c8cdmekEYKiC-zuMiw&s=09">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    size="2x"
                    className="text-white me-3"
                  />
                </a>
                <a href="https://www.youtube.com/@i2Reality">
                  <FontAwesomeIcon
                    icon={faYoutube}
                    size="2x"
                    className="text-white"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="copyright bg-secondary text-center lead p-2 text-white fs-6">
        Copyright ©2023 i2Reality All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
