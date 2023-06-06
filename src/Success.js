import React from "react"
import "./App.css"
import { Link } from "react-router-dom"

function Success() {
    return (
      <>
       <div class="container-fluid col-md-6">
            <div class="popup col-10" id="popup">
                <img class="d-flex justify-centent-center mx-auto" width="48" height="100" src="https://img.icons8.com/fluency/48/000000/checked.png" alt="checked"/>
                <h2 class="text-center">Received!</h2>
                <p class="text-center">Message sent to your Email. Thanks!</p>

                <p class="text-danger lead text-center fs-6">Click 'OK' to return</p>
              
                <Link
                  to="/"
                  class="btn"
                  type="button"
                  id="btnn"
                >
                  OK
                </Link>
            </div>
        </div>
      </>
      )
    }
    export default Success