import React from "react";
import Header from "../Header/Header";
import TourBook from "../TourBook/TourBook";
import TourInfo from "../TourInfo/TourInfo";
import Tours from "../Tours/Tours";

const Home = () => {
  return (
    <div className='home'>
      <Header></Header>
      <Tours></Tours>
      <TourBook></TourBook>
      <TourInfo></TourInfo>
    </div>
  );
};

export default Home;
