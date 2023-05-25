import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <div
        style={{ height: "60px" }}
        id="carouselExampleCaptions"
        class="carousel slide bg-warning w-100"
        data-bs-ride="carousel"
      >
        <nav class="navbar navbar-expand-lg navbar-light ">
          <div class="container-fluid">
            <img src="./images/logo.jpg" width="50" height="50" alt="" />
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
          <div class="carousel-item">
            <div
              style={{
                backgroundImage: ` url("./images/20230523_225514.jpg")`,
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
          <div class="carousel-item">
            <div
              style={{
                backgroundImage: `url("./images/20230523_225433.jpg")`,
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
      <div class="card mb-5 mx-auto mt-5 border-0" style={{ maxWidth: "80%" }}>
        <div class="row gy-5 d-flex justify-content-center mb-5">
          <div class="col-md-6">
            <img
              src="./images/20230523_225104.jpg"
              class="img-fluid rounded w-"
              alt="..."
            />
          </div>

          <div class="card-body col-md-6">
            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button
                    class="accordion-button py-3 px-4 fs-4"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    About Us
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                    nam dolorem nisi iste nihil doloribus ullam asperiores quasi
                    ea blanditiis voluptatum magni ab, sint atque velit, numquam
                    quaerat quam nesciunt!
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button
                    class="accordion-button collapsed py-3 px-4 fs-4"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Contact Us
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Eligendi, maxime. Velit nisi repellat debitis, a praesentium
                    excepturi, dolor placeat tempore error distinctio
                    necessitatibus assumenda nobis eaque vitae voluptate
                    blanditiis architecto?
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                  <button
                    class="accordion-button collapsed py-3 px-4 fs-4"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Home
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Itaque ratione id earum nihil, mollitia nobis autem vero
                    voluptates, repellendus illum alias voluptatibus corrupti
                    natus tenetur quisquam quo dolor! Quod, labore.
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                        to="/about"
                        class="nav-link text-white px-5 text-white"
                      >
                        About
                      </Link>
                    </li>
                    <li class="nav-item ">
                      {" "}
                      <Link
                        to="/contact"
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
                        to=""
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

export default About;
