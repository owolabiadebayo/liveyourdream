import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer"

function Home() {
  return (
    <>
      {" "}
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
      </div>
      <div
        class="card text-center rounded-0"
        style={{ backgroundColor: "#e7077d"}}
      >
        <div class="card-body d-grid align-items-center col-10 mx-auto py-5" style={{ maxWidth: "70%", height:"80vh"}}>
          <h5 class="card-title text-white fs-1">What Makes Us Different?</h5>
          <p class="card-text text-white m-0 text-align-center fs-3 py-4">
          i2 reality has made talents and art embedded within you very easy to come to light. You don't need a connection, you don't need to be taken advantage of, you don't have to be lose moral, you don't have to be a tool, as queen and kings all you need is your creativity and passion...i2 reality will shoulder you to the top. We are here because of you, walk with us, let's experience reality!
          </p>
          <Link to="/submit" class="btn btn-outline-light mb-5 fs-4 text-center">
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

      <div id="testimonialCarousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8 text-center">
              <img src="testimonial1.jpg" alt="Testimonial 1" class="img-fluid rounded-circle mb-3">
              <h5>John Doe</h5>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique justo et turpis pharetra
                interdum. Ut ut diam felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames
                ac turpis egestas."</p>
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8 text-center">
              <img src="testimonial2.jpg" alt="Testimonial 2" class="img-fluid rounded-circle mb-3">
              <h5>Jane Smith</h5>
              <p>"Vivamus consequat nunc ut gravida laoreet. Nam tincidunt malesuada lectus vel aliquet. Sed congue nisl
                vitae sem efficitur ullamcorper. Suspendisse convallis ipsum lectus, sed volutpat metus commodo
                sagittis."</p>
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8 text-center">
              <img src="testimonial3.jpg" alt="Testimonial 3" class="img-fluid rounded-circle mb-3">
              <h5>David Johnson</h5>
              <p>"Cras eu est vel turpis volutpat vulputate. Integer vel pulvinar odio. Maecenas sagittis ex ligula,
                auctor eleifend quam pulvinar non. Vestibulum convallis, lectus nec congue sollicitudin, lacus lacus
                commodo arcu."</p>
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8 text-center">
              <img src="testimonial4.jpg" alt="Testimonial 4" class="img-fluid rounded-circle mb-3">
              <h5>Sarah Davis</h5>
              <p>"Aenean euismod auctor quam. Sed ac interdum dolor. Proin pellentesque, tortor sed feugiat efficitur,
                ipsum est viverra felis, a tempus tellus odio a urna. Phasellus iaculis tellus mauris, eu pharetra mi
                feugiat vitae."</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
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
              <h5 class="card-title text-white fs-2">
                What is i2 Reality all about?
              </h5>
              <p class="card-text text-white fs-4">
              With the surge of self expression and content creation, were we seek to create something out of nothing, a quick expression and act that pleases the audience, the substance of our societal values has further deteriorated. 
              </p>
              <Link to="/about" class="btn btn-outline-light fs-4">
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
              <p>
              <i class="fa-solid fa-pen" style={{color: "#ffffff", fontSize:"3rem" }}></i>
              </p>
              <h5 class="card-title text-white fs-2">
                What would you want us to improve on?
              </h5>
              <p class="card-text text-white fs-4">
              "Literature is the mirror of life" they say. Stories make up our history, stories creates bond amongst us, stories creates love as well as hate... <br/>
              If given the opportunity, what effect will your story have on your society? 
              With i2 Reality, we take you to your reality.
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
      <Footer/>
    </>
  );
}

export default Home;
