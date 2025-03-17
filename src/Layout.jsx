// src/Layout.tsx
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <main>
        <Outlet /> {/* ✅ This will render the page content */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
