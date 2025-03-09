import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import "./Layout.css"; 

const Layout = () => {
  return (
    <div className="layout">
      <Navbar />
      <main className="layout__main">
        <Outlet /> {/* Nội dung trang sẽ hiển thị ở đây */}
      </main>
      <Footer />
    </div>
  );
};


export default Layout;
