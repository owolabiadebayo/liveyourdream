import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {" "}
      <nav class="navbar navbar-expand-lg navbar-light navbar-transparent" >
        <div class="container-fluid align-items-center d-flex justify-content-between" >
          <img 
            src="./images/logo.jpg"
            className="rounded-circle"
            style={{ width: "70px", marginLeft: "4rem"}}
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
                <button
                  class="btn fs-5 py-2 px-4 py-3 text-white m-md-2"
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
      <div
        // style={{ height: "700px" }}
        id="carouselExampleCaptions"
        class="carousel slide w-100"
        data-bs-ride="carousel"
      >
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
                  backgroundImage: `url("./images/2.jpg")`,
                  opacity: 0.9
                }}
                class="d-flex row justify-content-end py-5"
              >
                <div class="col-md-2"></div>
                <div class="col-md-8 py-5" style={{ opacity: 1 }}>
                  <div class="row">
                    <h1 class="text-white m-3 col-8">
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
                  backgroundImage: `url("./images/3.jpg")`,
                  opacity: 0.9,
                }}
                class="d-flex row justify-content-end py-5"
              >
                <div class="col-md-2"></div>
                <div class="col-md-8 py-5" style={{ opacity: 1 }}>
                  <div class="row">
                    <h1 class="text-white m-3 col-8">
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
      </div>
      <div
        class="card text-center rounded-0"
        style={{ backgroundColor: "#e7077d"}}
      >
        <div class="card-body d-grid align-items-center col-10 mx-auto py-5" style={{ maxWidth: "70%", height:"75vh"}}>
          <h5 class="card-title text-white fs-1">What Makes Us Different?</h5>
          <p class="card-text text-white m-0 text-align-center fs-5 py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui alias
            saepe, omnis aspernatur soluta labore sed eaque maxime dolore
            voluptates facilis ipsam adipisci animi reiciendis ad ab corporis
            deleniti aperiam.
          </p>
          <Link to="#" class="btn btn-outline-light mb-5 fs-5 text-center">
            Get Started Now
          </Link>
        </div>
      </div>
      <div
        class="card text-center rounded-0 py-5"
        style={{ backgroundColor: "indigo" }}
      >
        <p>
        <i class="fa-solid fs-1 fa-camera" style={{ color: "#ffffff"}}></i>
        </p>
        <h1 class="card-title py-4 text-white">Featured Auditions</h1>
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
              <h5 class="card-title text-white py-3">Jump the Queue</h5>
              <p class="card-text text-white py-3">
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
              <h5 class="card-title text-white py-3">
                Get Represented by the Experts
              </h5>
              <p class="card-text text-white py-3">
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
              <h5 class="card-title text-white py-3">Cut through the Cluster</h5>
              <p class="card-text text-white py-3">
                Find the perfect talent with ease and convenience.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div  class="row gy-5 w-100 mx-auto mb-0"
          style={{ backgroundColor: "#e7077d" }}>
      <div class="card mb-5 mx-auto mt-5" style={{ maxWidth: "80%" }}>
        <div
          class="row gy-5 w-100 mx-auto"
          style={{ backgroundColor: "#e7077d" }}
        >
          <div class="col-md-4">
            <img
              src="./images/2.jpg"
              class="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body d-grid">
              <p>
                <i
                  class="fa-solid fa-layer-group"
                  style={{ color: "#ffffff", fontSize:"3rem" }}
                ></i>
              </p>
              <h5 class="card-title text-white fs-3">
                What is Cast.i.ng all about?
              </h5>
              <p class="card-text text-white">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum,
                ab illum. Pariatur blanditiis nihil sequi voluptatem? Blanditiis
                suscipit, maiores facilis iste ullam neque nemo quaerat
                eligendi, fuga et tempora quia!
              </p>
              <Link to="#" class="btn btn-outline-light fs-5">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>

      </div>
      <div class="row gy-5 w-100 mx-auto mt-4" style={{ backgroundColor: "indigo" }}>
      <div class="card mb-3 mx-auto" style={{ maxWidth: "80%" }}>
        <div
          class="row gy-5 w-100 mx-auto"
          style={{ backgroundColor: "indigo" }}
        >
          
          <div class="col-md-7">
            <div class="card-body d-grid">
              <h5 class="card-title text-white fs-3">
                What would you want us to improve on?
              </h5>
              <p class="card-text text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                incidunt tempora aperiam! Eum obcaecati fugit ducimus ab ipsam
                sint maxime veritatis, quasi provident commodi. Nostrum
                blanditiis molestias perspiciatis aperiam quae.
              </p>
              <Link to="#" class="btn btn-outline-light fs-5">
                I'm Interested
              </Link>
            </div>
          </div>
          <div class="col-md-4">
            <img
              src="./images/1.jpg"
              class="img-fluid rounded-start"
              alt="..."
            />
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
                  <ul class="nav nav-footer text-center justify-content-center">
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
                  <div class="copyright text-center text-white">
                    Copyright © 2023 Cast.i.ng All Rights Reserved
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

export default Home;
