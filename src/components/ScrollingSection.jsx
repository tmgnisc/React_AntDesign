import React from "react";
import { Card } from "antd";


const featuredProducts = [
  { id: 1, title: "Watch", image: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2F0Y2h8ZW58MHx8MHx8fDA%3D" },
  { id: 2, title: "Shoes", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 3, title: "Bag", image: "https://plus.unsplash.com/premium_photo-1678739395192-bfdd13322d34?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmFnfGVufDB8fDB8fHww" },
  { id: 4, title: "Camera", image: "https://plus.unsplash.com/premium_photo-1663134149019-284682ece04c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
];

const ScrollingSection = () => {
  return (
    <div className="scrolling-section">
      <h2>Trending Now</h2>
      <div className="scroll-container">
        {featuredProducts.map((product) => (
          <Card key={product.id} cover={<img alt={product.title} src={product.image} />} title={product.title} />
        ))}
      </div>
    </div>
  );
};

export default ScrollingSection;
