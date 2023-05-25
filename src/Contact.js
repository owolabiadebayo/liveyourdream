import { Link } from "react-router-dom";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

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
      <div
        style={{ height: "60px" }}
        id="carouselExampleCaptions"
        class="carousel slide bg-warning w-100"
        data-bs-ride="carousel"
      >
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
          <div class="container-fluid">
            <img src="./logo.jpg" width="50" height="50" alt="" />
            <button
              class="navbar-toggler text-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon text-white"></span>
            </button>
          </div>
          <div
            class="collapse navbar-collapse col-6"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav me-auto mx-5 mb-2 mb-lg-0">
              <li class="nav-item">
                <Link
                  class="nav-link text-white fs-4"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-white fs-4" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-white fs-4" to="/contact">
                  Contact
                </Link>
              </li>

              <li class="nav-item mx-5">
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                  <button
                    class="btn fs-5 py-2 px-3 text-white me-md-2"
                    style={{ backgroundColor: "#e7077d" }}
                    type="button"
                  >
                    Submit Script
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div
              style={{
                backgroundImage: `url("./images/20230523_225152.jpg")`,
                opacity: 0.9,
              }}
              class="d-flex row justify-content-end py-5"
            >
              <div class="col-md-2"></div>
              <div class="col-md-8 py-5" style={{ opacity: 1 }}>
                <div class="row">
                  <h1 class="text-white m-3 col-6">
                    Nigeria's Premium Online Casting Platforms
                  </h1>
                </div>
                <div class="d-grid row-4 gap-2 d-md-block">
                  <button
                    class="btn m-3 rounded-0 p-3 col-5 btn-info text-white"
                    type="button"
                  >
                    I am an anctor
                  </button>
                  <button
                    type="button"
                    class="btn m-3 p-3 rounded-0 col-5 btn-outline-light"
                  >
                    I am a casting Director
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

      <form ref={form} onSubmit={sendEmail} class="row g-3 col-7 mx-auto m-5">
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
        <div class="col-sm-4">
          <div class="card mb-4" style={{ backgroundColor: "indigo" }}>
            <div class="card-body text-center">
              <p>
                <i
                  class="fa-solid fa-computer fs-1"
                  style={{ color: "#ffffff" }}
                ></i>
              </p>
              <h5 class="card-title text-white">Jump the Queue</h5>
              <p class="card-text text-white">
                Create an account in Minutes, get visible ....
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card bg-info mb-4">
            <div class="card-body text-center">
              <p>
                <i class="fa-solid fa-people" style={{ color: "#ffffff" }}></i>
              </p>
              <h5 class="card-title text-white">
                Get Represented by the Experts
              </h5>
              <p class="card-text text-white">
                In need of an agent or manager?
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card mb-4" style={{ backgroundColor: "#e7077d" }}>
            <div class="card-body text-center">
              <p>
                <i
                  class="fa-solid fa-layer-group fs-1"
                  style={{ color: "#ffffff" }}
                ></i>
              </p>
              <h5 class="card-title text-white">Cut through the Cluster</h5>
              <p class="card-text text-white">
                Find the perfect talent with ease and convenience.
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer style={{ backgroundColor: "indigo" }}>
        <section class="section p-5">
          <div>
            <div class="container">
              <div class="row align-items-center justify-content-md-between">
                <div class="col-md-6">
                  <ul class="nav nav-footer">
                    <li class="nav-item">
                      {" "}
                      <Link
                        to="http://"
                        class="nav-link text-white px-5 text-white"
                      >
                        {" "}
                        Home
                      </Link>
                    </li>
                    <li class="nav-item">
                      {" "}
                      <Link
                        to="about.html"
                        class="nav-link text-white px-5 text-white"
                      >
                        About
                      </Link>
                    </li>
                    <li class="nav-item ">
                      {" "}
                      <Link
                        to="http://"
                        class="nav-link text-white px-5 text-white"
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                  <div class="copyright text-white">
                    Copyright © 2023 Cast.i.ng All Rights Reserved
                  </div>
                </div>
                <div class="col-md-6">
                  <ul class="nav nav-footer justify-content-end">
                    <li class="nav-item">
                      <Link
                        to="http://"
                        target="_blank"
                        class="badge badge-circle badge-soci mr-3"
                      >
                        <i
                          class="fa-brands fa-twitter"
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
                          class="fa-brands fa-instagram"
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
                          class="fa-brands fa-linkedin-in"
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
                          class="fa-brands fa-facebook-f"
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
