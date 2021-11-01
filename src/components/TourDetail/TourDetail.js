import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
// import { Link } from "react-router-dom";

const TourDetail = () => {
  const { _id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://dreadful-eyeballs-21271.herokuapp.com/tours")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  const ExactService = data.filter((sr) => sr.id === _id);
  // console.log(ExactService)
  return (
    <div className="col-md-12 ">
      <div className="p-3">
        <h4 className="h4-text">TOURS DETAILS AT ONE GLANCE</h4>
        <img
          src={ExactService[0]?.image}
          className="img-thumbnail w-25"
          alt="..."
        />
        <h1 className="fs-1">{ExactService[0]?.title}</h1>
        <h2 className="fs-1 h2-text fw-bolder">
          Tour Fee:{ExactService[0]?.price} $
        </h2>
        <h5 className="h5-text">{ExactService[0]?.description}</h5>
        {/* <Link to="/shipping">
          <button className="btn btn-outline-dark" type="submit">
            Place Order
          </button>
        </Link> */}
      </div>
    </div>
  );
};

export default TourDetail;
