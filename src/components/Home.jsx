import React from "react";
import Navbar from "./Navbar";
import BannerBackground from "../assets/home-banner-background.png";
import BannerImage from "../assets/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";
const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="image is not showing" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Your Favourite Food delivered Hot & Fresh.
          </h1>
          <p className="primary-text">
            Healthy switcher chiefss do all the prep work like peeding chopping
            & assembling, so you can cook a fresh food.
          </p>
          <button className="secondary-button">
            Order Now <FiArrowRight />
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="image is not showing" />
        </div>
      </div>
    </div>
  );
};

export default Home;
