import React from "react";
import "./TourBook.css";
const TourBook = () => {
  return (
    <div className="container mb-3">
      <div className="row g-2">
        <div className="col-md-12 col-sm-12">
          <div className="p-3">
            <h4 className="h4-text text-center">PEOPLE POWER</h4>

            <h4 className="fs-1 h2-text fw-bolder">
              Our guides are the secret weapon behind our success.
            </h4>
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="p-3">
            <h1 className="h4-text text-start">Amazing support for all,</h1>

            <h4 className="text-start fs-1 h2-text fw-bolder">Ahmed Travels</h4>
            <p className="text-start">
              We help travellers, VIP facilities, and other Travels facilities
              effectively communicate important information to Travellers,
              Toure-Guide, and Others.{" "}
            </p>
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="p-3">
            <h5 className="text-start">ALL ADVENTURE</h5>
            <div className="progress">
              <div
                className="progress-bar bg-dark"
                role="progressbar"
                style={{ width: "75%" }}
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                75%
              </div>
            </div>{" "}
            <br />
            <h5 className="text-start">SCUBA DIVING</h5>
            <div className="progress">
              <div
                className="progress-bar bg-dark"
                role="progressbar"
                style={{ width: "57%" }}
                aria-valuenow="57"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                57%
              </div>
            </div>{" "}
            <br />
            <h5 className="text-start">PEAK CLIMBING</h5>
            <div className="progress">
              <div
                className="progress-bar bg-dark"
                role="progressbar"
                style={{ width: "77%" }}
                aria-valuenow="77"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                77%
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col justify-content-center">
        <div className="p-3 ">
          <h5 className="h4-text text-center">GET IN TOUCH</h5>
          {/* <h1 className='fs-1'>How can we</h1> */}
          <h6 className="fs-1 h2-text fw-bolder text-center">SUBSCRIBE</h6>
          <p className="h5-text text-center fw-bold">
            Get the all news early tours details <br /> whereas high standards
            in web-readiness.
          </p>
          <div className=" my-md-2 my-3"> </div>

          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Your Email to Subscribe"
          />
         <div className='text-center'>
         <button
            className="btn btn-dark align-middle mt-3 justify-content-center"
            type="submit"
          >
            Submit
          </button>
         </div>
        </div>
      </div>
    </div>
  );
};

export default TourBook;
