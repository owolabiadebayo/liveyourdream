import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Carousel1 from "./Carousel1";

function About() {
  return (
    <>
      <Navbar id="top" />
      <Carousel1 />

      <div class="card mb-5 mx-auto mt-5 border-0" style={{ maxWidth: "80%" }}>
        <div class="row gy-5 d-flex justify-content-center mb-5">
          <div class="col-md-6 mx-auto" style={{ width: "350px" }}>
            <img
              src="./images/4.jpg"
              class="img-fluid rounded"
              style={{ height: "350px", width: "350px" }}
              alt="..."
            />
          </div>

          <div class="card-body d-flex align-items-center justify-content-center col-md-6">
            <div
              class="accordion"
              style={{ width: "100%" }}
              id="accordionExample"
            >
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
                  <div class="accordion-body fs-4">
                    As our society becomes increasingly focused on
                    self-expression and content creation, the meaningful
                    substance and values we hold dear seem to be fading away. At
                    i2 Reality, we recognize the importance of cultivating art
                    and creativity in the younger generations, and we are
                    committed to helping aspiring actors and actresses bring
                    their potential to life.
                    <br />
                    Our objective is simple: to provide an opportunity for
                    talented individuals to submit their own scripts and short
                    videos and be considered for the spotlight. At i2 Reality,
                    we offer a supportive environment where we can nurture your
                    talents and propel you towards success.
                    <br />
                    We firmly believe that anyone can rise to the top, without
                    the need for connections or compromises. With i2 Reality,
                    your passions and creativity are the only tools you need –
                    we will be the ones to guide you to your full potential.
                    <br />
                    Our commitment to our mission is based on our desire to lift
                    each other up, to create a community where everyone can
                    experience the full reality of their dreams. Join us in this
                    adventure towards the top – we are here for you every step
                    of the way.
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
                    <div class="col mx-auto border rounded pb-5">
                      <div class="card-body text-center">
                        <h2 class="mt-5 col-p slider-head">Contact Details</h2>
                        <p>Feel free to contact us with questions</p>
                        <div>
                          <b>Email:</b>liveyourdream@i2Reality.com
                        </div>

                        <a
                          href=" https://twitter.com/_i2reality?t=M9P-c8cdmekEYKiC-zuMiw&s=09"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i
                            class="fa-brands fa-square-twitter fs-1 mx-2"
                            style={{ color: "#4287ff" }}
                          ></i>
                        </a>
                        <a
                          href="https://www.youtube.com/@i2Reality"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i
                            class="fa-brands fa-linkedin fs-1 mx-2"
                            style={{ color: "#263d64" }}
                          ></i>
                        </a>
                        <Link
                          to=" https://instagram.com/i2_reality?igshid=MzRlODBiNWFlZA=="
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i
                            class="fa-brands fa-instagram fs-1 mx-2"
                            style={{ color: "#ff0000" }}
                          ></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row w-90 mx-auto mt-4 mb-5">
        <div class="col-sm-4 py-3">
          <div class="card mb-4 py-3" style={{ backgroundColor: "#3E92CC" }}>
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
          <div class="card mb-4 py-3" style={{ backgroundColor: "#3E92CC" }}>
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
      <a
        href="#top"
        class="btn btn-outline-danger col-3 mx-auto d-flex justify-content-center"
      >
        Top Page ⬆
      </a>
      <Footer />
    </>
  );
}

export default About;
