import React from 'react'
import { Link } from "react-router-dom";


function Carousel() {
  return (
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
                    <Link
                    to="/submit"
                      class="btn m-3 rounded-0 p-3 col-5 btn-info text-white"
                      type="button"
                    >
                     I Am a Creative
                    </Link>
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
                  <Link
                    to="/submit"
                      class="btn m-3 rounded-0 p-3 col-5 btn-info text-white"
                      type="button"
                    >
                     I Am a Creative
                    </Link>
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
                  <Link
                    to="/submit"
                      class="btn m-3 rounded-0 p-3 col-5 btn-info text-white"
                      type="button"
                    >
                     I Am a Creative
                    </Link>
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
  )
}

export default Carousel