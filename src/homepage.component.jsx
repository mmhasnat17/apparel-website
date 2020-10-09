import React from "react";
import "./homepage.styles.scss";

const HomePage = () => (
  <div className="homepage">
    <h1>Welcome to my Homepage</h1>
    <div className="directory-menu">
      <div className="menu-item">
        <div className="content">
          <div className="title">HATS</div>
          <span className="subtitle">Shop Now</span>
        </div>
      </div>

      <div className="menu-item">
        <div className="content">
          <div className="title">JACKETS</div>
          <span className="subtitle">Shop Now</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <div className="title">Sneakers</div>
          <span className="subtitle">Shop Now</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">WOMENS</h1>
          <span className="subtitle">Shop Now</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <div className="title">MENS</div>
          <span className="subtitle">Shop Now</span>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
