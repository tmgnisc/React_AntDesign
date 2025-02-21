import React from "react";
import { Button } from "antd";


const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>Welcome to MyShop</h1>
        <p>Find the best products at unbeatable prices</p>
        <Button type="primary" size="large">
          Shop Now
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
