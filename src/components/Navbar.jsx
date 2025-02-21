import React from "react";
import { Layout, Menu } from "antd";

const { Header } = Layout;

const HeaderComponent = () => {
  return (
    <Header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <div className="logo" style={{ color: "white", fontSize: "20px", fontWeight: "bold" }}>
        MyShop
      </div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">Products</Menu.Item>
        <Menu.Item key="3">Contact</Menu.Item>
      </Menu>
    </Header>
  );
};

export default HeaderComponent;
