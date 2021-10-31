import React from "react";

const TourInfo = () => {
  return (
    <div className="container overflow-hidden mb-5">
      <h5 className='text-center'>OUR TOURS</h5>
      <h2 className="h2-text text-center">SUPPORTS</h2>
      <div className="row gy-5">
        <div className="col-md-4 col-sm-12">
          <div className="p-3 border d-flex ">
            {/* <img src={""} className="w-25" alt="" /> */}
            <i
              className="fas fa-users-cog fa-3x"
              aria-hidden="true"
              style={{  color: "black" }}
            ></i>
            <div>
              <p className="mx-5 align-middle fw-bold h2-text">24/7 Support</p>
              <small>Worlds Best 24/7 Support</small>{" "}
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="p-3 border d-flex ">
            {/* <img src={""} className="w-25" alt="" /> */}
            <i
              className="fas fa-cubes fa-3x"
              aria-hidden="true"
              style={{  color: "black" }}
            ></i>
            <div>
              <p className="mx-5 align-middle fw-bold h2-text">
                Wide Variety Of Destinations
              </p>
              <small>Worlds Best Wide Variety Of Destinations</small>{" "}
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="p-3 border d-flex ">
            {/* <img src={""} className="w-25" alt="" /> */}
            <i
              className="fas fa-bookmark fa-3x"
              aria-hidden="true"
              style={{  color: "black" }}
            ></i>
            <div>
              <p className="mx-5 align-middle fw-bold h2-text">Personalized Matching</p>
              <small>Worlds Best Personalized Matching</small>{" "}
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="p-3 border d-flex ">
            {/* <img src={""} className="w-25" alt="" /> */}
            <i
              className="fas fa-box fa-3x"
              aria-hidden="true"
              style={{  color: "black" }}
            ></i>
            <div>
              <p className="mx-5 align-middle fw-bold h2-text">
                Highly Qualified Service
              </p>
              <small>Worlds Best Highly Qualified Service</small>{" "}
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="p-3 border d-flex ">
            {/* <img src={""} className="w-25" alt="" /> */}
            <i
              className="fas fa-umbrella fa-3x"
              aria-hidden="true"
              style={{  color: "black" }}
            ></i>
            <div>
              <p className="mx-5 align-middle fw-bold h2-text">Best Price Guarantee</p>
              <small>Worlds Best Best Price Guarantee</small>{" "}
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="p-3 border d-flex ">
            {/* <img src={""} className="w-25" alt="" /> */}
            <i
              className="fas fa-chart-bar fa-3x"
              aria-hidden="true"
              style={{ color: "black" }}
            ></i>
            <div>
              <p className="mx-5 align-middle fw-bold h2-text">Handpicked Hotels</p>
              <small>Worlds Best Handpicked Hotel's</small>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourInfo;
