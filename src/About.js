import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
function About() {
  return (
    <>
   <Navbar/>
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
                    Nigeria's Premium Content Creation Platform
                    </h1>
                  </div>
                  <div class="d-grid row-4 gap-2 d-md-block">
                    <button
                      class="btn m-3 rounded-0 p-3 col-5 btn-info text-white"
                      type="button"
                    >
                     I am  a Scriptwriter
                    </button>
                    <button
                      type="button"
                      class="btn m-3 p-3 rounded-0 col-5 btn-outline-light"
                    >
                      I am an anctor
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
      <div class="card mb-5 mx-auto mt-5 border-0" style={{ maxWidth: "80%" }}>
        <div class="row gy-5 d-flex justify-content-center mb-5">
          <div class="col-md-6 mx-auto" style={{width:"350px"}}>
            <img
              src="./images/4.jpg"
              class="img-fluid rounded"
              style={{height: "350px",width:"350px"}}
              alt="..."
            />
          </div>

          <div class="card-body d-flex align-items-center justify-content-center col-md-6">
            <div class="accordion" style={{width: "100%"}} id="accordionExample">
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
                  With the surge of self expression and content creation, were we seek to create something out of nothing, a quick expression and act that pleases the audience, the substance of our societal values has further deteriorated. 
                  <br/>
                  i2 reality has made talents and art embedded within you very easy to come to light. You don't need a connection, you don't need to be taken advantage of, you don't have to be lose moral, you don't have to be a tool, as queen and kings all you need is your creativity and passion...i2 reality will shoulder you to the top. We are here because of you, walk with us, let's experience reality!
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
                  <div class="col-md-4 mx-auto border rounded pb-5">
        <div class="card-body text-center fs-4">
          <h2 class="mt-5 col-p slider-head fs-2">Contact Details</h2>
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
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                  <button
                  to="/"
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
                to="/"
                  id="collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                   ...
                  </div>
                </div>
              </div>
            </div>
          </div>
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

      
    </>
  );
}

export default About;
