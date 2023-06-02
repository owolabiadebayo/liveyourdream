import { Link } from "react-router-dom";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "./Navbar";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cfd64su",
        "template_9w5yp69",
        form.current,
        "12t1onrHRMVF560yD"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
     <Navbar/>
     <div
        
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner" >
          <div class="carousel-item active" >
            <div
              style={{
                backgroundImage: `url("./images/1.jpg")`,
                opacity: 0.9
              }}
              class="d-flex row justify-content-end py-5"
            >
              <div class="col-md-2"></div>
              <div class="col-md-8 py-5" style={{ opacity: 1 }}>
                <div class="row">
                  <h1 class="text-white m-3 col-8">
                    Nigeria's Premium Content Creation Platform
                  </h1>
                </div>
                <div class="d-grid row-4 gap-2 d-md-block">
                  <button
                  to="/submit"
                    class="btn m-3 rounded-0 p-3 col-5 btn-info text-white"
                    type="button"
                  >
                    I am a Scriptwriter
                  </button>
                  <button
                    type="button"
                    class="btn m-3 p-3 rounded-0 col-5 btn-outline-light"
                  >
                    I am an Actor
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div
              style={{
                backgroundImage: `url("./images/2.jpg")`,
                opacity: 0.9
              }}
              class="d-flex row justify-content-end py-5"
            >
              <div class="col-md-2"></div>
              <div class="col-md-8 py-5" style={{ opacity: 1 }}>
                <div class="row">
                  <h1 class="text-white m-3 col-8">
                  Nigeria's Premium Content Creation Platform
                  </h1>
                </div>
                <div class="d-grid row-4 gap-2 d-md-block">
                  <button
                    class="btn m-3 rounded-0 p-3 col-5 btn-info text-white"
                    type="button"
                  >
                     I am a Scriptwriter
                  </button>
                  <button
                    type="button"
                    class="btn m-3 p-3 rounded-0 col-5 btn-outline-light"
                  >
                    I am an Actor
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div
              style={{
                backgroundImage: `url("./images/3.jpg")`,
                opacity: 0.9,
              }}
              class="d-flex row justify-content-end py-5"
            >
              <div class="col-md-2"></div>
              <div class="col-md-8 py-5" style={{ opacity: 1 }}>
                <div class="row">
                  <h1 class="text-white m-3 col-8">
                  Nigeria's Premium Content Creation Platform
                  </h1>
                </div>
                <div class="d-grid row-4 gap-2 d-md-block">
                  <button
                    class="btn m-3 rounded-0 p-3 col-5 btn-info text-white"
                    type="button"
                  >
                    I am a Scriptwriter
                  </button>
                  <button
                    type="button"
                    class="btn m-3 p-3 rounded-0 col-5 btn-outline-light"
                  >
                    I am an Actor
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <form ref={form} onSubmit={sendEmail} class="row g-3 col-8 mx-auto m-4">
        <div class="col-md-6">
          <label for="inputFirstName4" class="form-label">
            First Name
          </label>
          <input
            name="firstname"
            type="text"
            class="form-control"
            id="inputFirstName4"
            placeholder="First name"
            aria-label="First name"
          />
        </div>
        <div class="col-md-6">
          <label for="inputLastName4" class="form-label">
            Last Name
          </label>
          <input
            name="lastname"
            placeholder="Last name"
            aria-label="Last name"
            type="text"
            class="form-control"
            id="inputLastName4"
          />
        </div>
        <div class="col-12">
          <label for="inputEmail4" class="form-label">
            Email
          </label>
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            class="form-control"
            id="inputEmail4"
          />
        </div>
        <div class="col-12">
          <label for="inputAddress2" class="form-label">
            Phone
          </label>
          <input
            name="phone"
            type="text"
            class="form-control"
            id="inputAddress2"
            placeholder="Phone Number"
          />
        </div>
        <div>
      
      </div>
        <div class="form-floating">
          <textarea
            name="message"
            class="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            style={{ height: "100px" }}
          ></textarea>
          <label for="floatingTextarea2">Message</label>
        </div>
       
        <div class="d-grid gap-2 col-12 mx-auto">
          <button class="btn btn-primary" type="submit">
            Send
          </button>
        </div>
      </form>

      <div class="col-md-4 mx-auto border rounded pb-5">
        <div class="card-body text-center">
          <h2 class="mt-5 col-p slider-head">Contact Details</h2>
          <p>Feel free to contact us with questions</p>
          <div>
            <b>Email:</b>info@example.com.ng
          </div>
          <br />
          <b>Phone:</b> "+123-456-7890"
          <br />
          <Link to="http://" target="_blank" rel="noopener noreferrer">
            <i
              class="fa-brands fs-1 fa-square-facebook mx-2"
              style={{ color: "#1d3763d5" }}
            ></i>
          </Link>
          <Link to="http://" target="_blank" rel="noopener noreferrer">
            <i
              class="fa-brands fa-square-twitter fs-1 mx-2"
              style={{ color: "#4287ff" }}
            ></i>
          </Link>
          <Link to="http://" target="_blank" rel="noopener noreferrer">
            <i
              class="fa-brands fa-linkedin fs-1 mx-2"
              style={{ color: "#263d64" }}
            ></i>
          </Link>
          <Link to="http://" target="_blank" rel="noopener noreferrer">
            <i
              class="fa-brands fa-instagram fs-1 mx-2"
              style={{ color: "#ff0000" }}
            ></i>
          </Link>
        </div>
      </div>

      <div class="row w-90 mx-auto mt-4 mb-5">
        <div class="col-sm-4 py-3">
          <div class="card mb-4 py-3" style={{ backgroundColor: "indigo" }}>
            <div class="card-body text-center py-3">
              <p>
                <i
                  class="fa-solid fs-1 fa-computer py-3"
                  style={{ color: "#ffffff" }}
                ></i>
              </p>
              <h5 class="card-title text-white py-3 fs-2">Jump the Queue</h5>
              <p class="card-text text-white py-3 fs-4">
                Create an account in Minutes, get visible ....
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-4 py-3">
          <div class="card bg-info mb-4 py-3">
            <div class="card-body text-center py-3">
              <p>
              <i class="fa-solid fs-1 fa-person py-3"style={{color: "#ffffff",}}></i>
         
        
              </p>
              <h5 class="card-title text-white py-3 fs-2">
                Get Represented by the Experts
              </h5>
              <p class="card-text text-white py-3 fs-4">
                In need of an agent or manager?
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-4 py-3">
          <div class="card mb-4 py-3" style={{ backgroundColor: "#e7077d" }}>
            <div class="card-body text-center py-3">
              <p>
                <i
                  class="fa-solid fs-1 fa-layer-group py-3"
                  style={{ color: "#ffffff" }}
                ></i>
              </p>
              <h5 class="card-title text-white py-3 fs-2">Cut through the Cluster</h5>
              <p class="card-text text-white py-3 fs-4">
                Find the perfect talent with ease and convenience.
              </p>
            </div>
          </div>
        </div>
      </div>

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
    </>
  );
}

export default Contact;
