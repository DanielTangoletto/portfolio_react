import React from "react";
import BG from "../../assets/bg.png";

const Home = () => {
  return (
    <div className="home">
      <img src={BG} alt="" />
      <div className="home_mobile">
        <h1>Un développeur sauvage apparaît !</h1>
        <p>... et il compte attraper tous les codes !</p>
        <button>En savoir plus...</button>
      </div>
    </div>
  );
};

export default Home;
