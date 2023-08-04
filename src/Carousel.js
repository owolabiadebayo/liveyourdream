import React from "react";
import "./Carousel.css";

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
        <div class="carousel-inner imgs">
          <div class="carousel-item active">
            <div
              style={{
                opacity: 0.9,
              }}
              class="d-flex row justify-content-end"
            >
              <img
                src="./images/video1.gif"
                className="d-block imgs w-100"
                alt="..."
              />
            </div>
          </div>
          <div class="carousel-item ">
            <div
              style={{
                opacity: 0.9,
              }}
              class="d-flex row justify-content-end"
            >
              <img
                src="./images/video3.gif"
                class="d-block imgs w-100"
                alt="..."
              />
            </div>
          </div>
          <div class="carousel-item ">
            <div
              style={{
                opacity: 0.9,
              }}
              class="d-flex row justify-content-end"
            >
              <img
                src="./images/video2.gif"
                class="d-block imgs w-100"
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
