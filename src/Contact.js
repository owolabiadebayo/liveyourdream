import { Link } from "react-router-dom";
import React, { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Carousel from "./Carousel";
import { useNavigate } from "react-router-dom";

function Contact() {
  const form = useRef();
  const Navigate = useNavigate();
  useEffect(() => {
    document.title = "i2reality | Contact";
  }, []);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_srgd2nw",
        "template_swfgl16",
        form.current,
        "tZteYUm4XKpANHYHd"
      )
      .then(
        (res) => {
          if (res.status === 200) {
            Navigate("/success");
          }
        },
        (err) => {
          Navigate("/failure");
        }
      );
  };
  return (
    <>
      <Navbar />
      <Carousel />

      <form ref={form} onSubmit={sendEmail} class="row g-3 col-8 mx-auto m-4">
        <div class="col-md-6">
          <label for="inputFirstName4" class="form-label">
            First Name
          </label>
          <input
            required
            name="firstname"
            type="text"
            class="form-control"
            id="inputFirstName4"
            placeholder="First name"
            aria-label="First name"
          />
        </div>
        <div class="col-md-6">
          <label for="inputLastName4" class="form-label">
            Last Name
          </label>
          <input
            required
            name="lastname"
            placeholder="Last name"
            aria-label="Last name"
            type="text"
            class="form-control"
            id="inputLastName4"
          />
        </div>
        <div class="col-12">
          <label for="inputEmail4" class="form-label">
            Email
          </label>
          <input
            required
            name="email"
            type="email"
            placeholder="Email Address"
            class="form-control"
            id="inputEmail4"
          />
        </div>
        <div class="col-12">
          <label for="inputAddress2" class="form-label">
            Phone
          </label>
          <input
            required
            name="phone"
            type="text"
            class="form-control"
            id="inputAddress2"
            placeholder="Phone Number"
          />
        </div>
        <div></div>
        <div class="form-floating">
          <textarea
            required
            name="message"
            class="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            style={{ height: "100px" }}
          ></textarea>
          <label for="floatingTextarea2">Message</label>
        </div>

        <div class="d-grid gap-2 col-12 mx-auto">
          <input
            class="btn btn-primary fs-5 py-2 px-4 py-3 text-white m-md-2"
            onclick="Success()"
            type="submit"
            value="Send"
          />
        </div>
      </form>

      <div class="col-md-4 mx-auto border rounded pb-5">
        <div class="card-body text-center">
          <h2 class="mt-5 col-p slider-head">Contact Details</h2>
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

      <Footer />
    </>
  );
}

export default Contact;
