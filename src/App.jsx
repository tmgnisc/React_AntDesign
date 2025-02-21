import React from "react";
import { Layout } from "antd";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import { Content } from "antd/es/layout/layout";
import ProductSection from "./components/ProductSection";

function App() {
  return (
    <Layout>
      <Navbar />
      <Content>
        <HeroSection />
        <ProductSection/>
      </Content>
    </Layout>
  );
}

export default App;
