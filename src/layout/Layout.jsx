import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Layout.css";  // ✅ Ensure this file exists

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <main className="main-content">
        <Outlet /> {/* ✅ Renders page content dynamically */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
