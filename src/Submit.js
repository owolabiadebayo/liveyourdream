import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Carousel from "./Carousel";

function Submit() {
  return (
    <>
      <Navbar />
      <Carousel />
      <div>
        <iframe
          class="mx-auto col-12"
          title="forms"
          src="https://docs.google.com/forms/d/e/1FAIpQLSc_ILQ4ZphzPqZo_EOsQmvwLwezVY9wirvsdG8uaSMVjsuB0A/viewform?embedded=true"
          height="1256"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </div>

      <div class="col-md-4 mx-auto border rounded pb-5">
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
            to="https://instagram.com/i2_reality?igshid=MzRlODBiNWFlZA=="
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
              <h5 class="card-title text-white py-3">Jump the Queue</h5>
              <p class="card-text text-white py-3">
                Create an account in Minutes, get visible...
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
          <div class="card mb-4 py-3" style={{ backgroundColor: "#3E92CC" }}>
            <div class="card-body text-center py-3">
              <p>
                <i
                  class="fa-solid fs-1 fa-layer-group py-3"
                  style={{ color: "#ffffff" }}
                ></i>
              </p>
              <h5 class="card-title text-white py-3">
                Cut through the Cluster
              </h5>
              <p class="card-text text-white py-3">
                Find the perfect talent with ease and convenience.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Submit;
