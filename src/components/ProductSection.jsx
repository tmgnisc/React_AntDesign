import React from "react";
import { Card, Row, Col, Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";


const products = [
  {
    id: 1,
    title: "Smartphone",
    price: "$499",
    image: "https://plus.unsplash.com/premium_photo-1680623400141-7e129b7c56d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBob25lfGVufDB8fDB8fHww",
  },
  {
    id: 2,
    title: "Laptop",
    price: "$999",
    image: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Headphones",
    price: "$199",
    image: "https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D",
  },
];

const ProductSection = () => {
  return (
    <div className="product-section">
      <h2>Our Products</h2>
      <Row gutter={[20, 20]}>
        {products.map((product) => (
          <Col key={product.id} xs={24} sm={12} md={8}>
            <Card
              className="product-card"
              cover={<img alt={product.title} src={product.image} className="product-image" />}
            >
              <div className="card-content">
                <h3>{product.title}</h3>
                <p className="product-price">{product.price}</p>
                <Button type="primary" icon={<ShoppingCartOutlined />} className="cart-btn">
                  Add to Cart
                </Button>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductSection;
