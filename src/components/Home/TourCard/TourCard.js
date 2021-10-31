import React from "react";
import { Link } from "react-router-dom";
import "./TourCard.css";
const TourCard = ({tour}) => {
  const { title, image, description, price, _id } = tour;
  return (
    <div className="tourCard pb-1 mb-5 text-center">
      <img src={image} alt="" />
      <h3 className="title">{title}</h3>
      <h5>Price: {price}$</h5>
      <p className="px-3  ">{description}</p>
      <Link to={`/placeOrder/${_id}`}>
        <button className="btn btn-outline-dark">Book</button>
      </Link>
    </div>
  );
};

export default TourCard;
