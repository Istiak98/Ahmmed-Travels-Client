import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
const About = () => {
  return (
    <div>
      <div className="image-aboutus-banner">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="lg-text">About US</h1>
              <p className="image-aboutus-para">AHMED TRAVELS</p>
            </div>
          </div>
        </div>
      </div>
      <div className="aboutus-secktion paddingTB60">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1 className="strong">
                Who we are and <br /> what we do
              </h1>
              <p className="lead">
                This is the world's best TRAVELS SITES
                <br />
                easy and quick
              </p>
            </div>
            <div className="col-md-6">
              <h2 style={{ color: "goldenrod" }}>Mission</h2>
              <p className="text-start">
                Since 2015, ‘AHMED TRAVELS’ has been focused on bringing our
                customers the best in esteem and quality travel game plans. We
                are enthusiastic about movement and sharing the world’s marvels
                on the relaxation travel side, and giving corporate explorers
                hello there contact administrations to encourage their business
                travel needs.
              </p>
              <h2 style={{ color: "goldenrod" }}>Vision</h2>
              <p className="text-start">
                We’re a worker-claimed travel organization secured by our
                qualities, trustworthiness, and commitment to client benefit.
                Our honor-winning organization reliably positions as a standout
                amongst other offices in the nation (Travel Weekly, Business
                Travel Weekly), and is the best individual from the renowned
                Signature Travel Network, an overall association enabling us to
                give our clients unmatched advantages.
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </div>



  );
};

export default About;
