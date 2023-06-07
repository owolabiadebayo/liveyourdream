import React, { useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { FcHome } from "react-icons/fc";

function Success() {
  useEffect(() => {
    document.title = "i2reality | Success";
  }, []);
  return (
    <>
      <div class="container-fluid col-md-6">
        <div class="popup col-10" id="popup">
          <img
            class="d-flex justify-centent-center mx-auto"
            width="48"
            height="100"
            src="https://img.icons8.com/fluency/48/000000/checked.png"
            alt="checked"
          />
          <h2 class="text-center">Received!</h2>
          <p class="text-center">
            {" "}
            Your application has been received, We’re thrilled to hear from you.
            you'll receive a short message soon in your email address for next
            step regarding your application. Cheers
          </p>

          <Link to="/" class="lead btn text-danger " type="button" id="btnn">
            Home <FcHome size={35} />
          </Link>
        </div>
      </div>
    </>
  );
}
export default Success;
