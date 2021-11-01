import React, { useEffect, useState } from "react";
import TourCard from "../TourCard/TourCard";
import "./Tours.css";
const Tours = () => {
  const [tours, setTours] = useState([]);
  useEffect(()=>{
    fetch('https://dreadful-eyeballs-21271.herokuapp.com/tours')
    .then(res=>res.json())
    .then(data=>setTours(data))
  },[])
  return (
    <div id="tours">
      <h4 className="text-warning mt-5 text-center">Ahmed Travels</h4>
      <h5 className=" text-center"> DELUX TOURS OFFERS</h5>
      <div className="tour-details mt-3">
        {tours.map((tour) => (
          <TourCard tour={tour} key={tour._id}></TourCard>
        ))}
      </div>
    </div>
  );
};

export default Tours;
