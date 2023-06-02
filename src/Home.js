import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "./App.css";
function Home() {
  return (
    <>
      {" "}
      <Navbar />
      <div
        id="carouselExampleCaptions"
        class="carousel slide w-100"
        data-bs-ride="carousel"
      >
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div
                style={{
                  backgroundImage: `url("./images/1.jpg")`,
                  paddingBottom: "500px",
                  opacity: 0.9,
                }}
                class="d-flex row justify-content-end"
                id="bgOne"
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
      </div>
      <div
        class="card text-center rounded-0"
        style={{ backgroundColor: "#e7077d" }}
      >
        <div
          class="card-body d-grid align-items-center col-md-12 mx-auto py-5"
          style={{ maxWidth: "70%", height: "80vh" }}
        >
          <h5 class="card-title text-white fs-1">What Makes Us Different?</h5>
          <p class="card-text text-white m-0 text-align-center fs-md-6 py-4">
            i2 reality has made talents and art embedded within you very easy to
            come to light. You don't need a connection, you don't need to be
            taken advantage of, you don't have to be lose moral, you don't have
            to be a tool, as queen and kings all you need is your creativity and
            passion...i2 reality will shoulder you to the top. We are here
            because of you, walk with us, let's experience reality!
          </p>
          <Link
            to="/submit"
            class="btn btn-outline-light mb-5 fs-4 text-center"
          >
            Get Started Now
          </Link>
        </div>
      </div>
      <div
        class="card text-center rounded-0 py-5"
        style={{ backgroundColor: "indigo" }}
      >
        <p>
          <i class="fa-solid fs-1 fa-camera" style={{ color: "#ffffff" }}></i>
        </p>
        <h1 class="card-title py-4 text-white fs-2">Featured Auditions</h1>
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
                <i
                  class="fa-solid fs-1 fa-person py-3"
                  style={{ color: "#ffffff" }}
                ></i>
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
              <h5 class="card-title text-white py-3 fs-2">
                Cut through the Cluster
              </h5>
              <p class="card-text text-white py-3 fs-4">
                Find the perfect talent with ease and convenience.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          height: "450px",
          backgroundColor: "#95a4c18f",
          marginBottom: "5.5rem",
        }}
        id="testimonialCarousel"
        class="carousel slide d-flex align-items-center "
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <h2 class="text-center text-decoration-underline mb-4">
            Testimonials
          </h2>
          <div class="carousel-item active">
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-8 text-center">
                  <p class="fs-3">
                    "Working with i2Reality was an absolute pleasure. Their
                    ability to bring characters to life and craft compelling
                    narratives is truly remarkable. I highly recommend their
                    services!"
                  </p>
                  <h5 class="lead text-end fs-4">~ John Chibuike</h5>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-8 text-center">
                  <p class="fs-3">
                    "I've collaborated with several scriptwriters in my career,
                    but i2Reality stands out as one of the best. Their attention
                    to detail, creativity, and knack for storytelling is
                    unparalleled. I couldn't be happier with the results!"
                  </p>
                  <h5 class="lead text-end fs-4">~ Charles Anene</h5>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-8 text-center">
                  <p class="fs-3">
                    "I had the privilege of having i2Reality write the script
                    for my latest project, and I was blown away by their talent.
                    They captured the essence of my vision and transformed it
                    into a captivating screenplay. I can't thank them enough!"
                  </p>
                  <h5 class="lead text-end fs-4">~ David Johnson</h5>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-8 text-center">
                  <p class="fs-3">
                    "If you're looking for a skilled scriptwriter who
                    understands the intricacies of storytelling, look no further
                    than i2Reality. Their ability to craft engaging dialogue and
                    compelling narratives is truly impressive. I highly
                    recommend their services."
                  </p>
                  <h5 class="lead text-end fs-4">~ Sarah Danjuma</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#testimonialCarousel"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#testimonialCarousel"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div
        class="row gy-5 w-100 mx-auto mb-0"
        style={{ backgroundColor: "#e7077d" }}
      >
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
                    style={{ color: "#ffffff", fontSize: "3rem" }}
                  ></i>
                </p>
                <h5 class="card-title text-white fs-2">
                  What is i2 Reality all about?
                </h5>
                <p class="card-text text-white fs-4">
                  With the surge of self expression and content creation, were
                  we seek to create something out of nothing, a quick expression
                  and act that pleases the audience, the substance of our
                  societal values has further deteriorated.
                </p>
                <Link to="/about" class="btn btn-outline-light fs-4">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="row gy-5 w-100 mx-auto mt-4"
        style={{ backgroundColor: "indigo" }}
      >
        <div class="card mb-3 mx-auto" style={{ maxWidth: "80%" }}>
          <div
            class="row gy-5 w-100 mx-auto"
            style={{ backgroundColor: "indigo" }}
          >
            <div class="col-md-7">
              <div class="card-body d-grid">
                <p>
                  <i
                    class="fa-solid fa-pen"
                    style={{ color: "#ffffff", fontSize: "3rem" }}
                  ></i>
                </p>
                <h5 class="card-title text-white fs-2">
                  What would you want us to improve on?
                </h5>
                <p class="card-text text-white fs-4">
                  "Literature is the mirror of life" they say. Stories make up
                  our history, stories creates bond amongst us, stories creates
                  love as well as hate... <br />
                  If given the opportunity, what effect will your story have on
                  your society? With i2 Reality, we take you to your reality.
                </p>
                <Link to="/contact" class="btn btn-outline-light fs-4">
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
      <footer style={{ backgroundColor: "indigo", marginTop: "40px" }}>
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

export default Home;
