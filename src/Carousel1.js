import React from "react";

function Carousel1() {
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
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div
              style={{
                opacity: 0.9,
              }}
              class="d-flex row justify-content-end"
            >
              <img
                src="./images/video1.gif"
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

export default Carousel1;
