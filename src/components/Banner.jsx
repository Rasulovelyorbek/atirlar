import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="container banner-content">
        <img src="./img/logo.png" alt="" />
        <div className="search-bar">
          <button className="catalog-button">
            <i className="menu-icon" />
            <span>КАТАЛОГ</span>
          </button>
          <input
            type="text"
            placeholder="Найти парфюм..."
            className="search-input"
          />
            <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="icon">
          <i class="fa-solid fa-user"></i>
          <i class="fa-solid fa-bag-shopping"></i>
        </div>
      </div>
    </div>
  );
};

export default Banner;
