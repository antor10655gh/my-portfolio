// eslint-disable-next-line no-unused-vars
import React from "react";
import Header from "./Header";
import AppRoute from "../../routes/AppRoute";
import GoToTop from "../GoToTop/GoToTop";
import Footer from "./Footer";
import FooterBottom from "./FooterBottom";

const Layout = () => {
  return (
    <div className="relative">
      <Header />
      <AppRoute />
      <Footer />
      <FooterBottom />
      <GoToTop />
    </div>
  );
};

export default Layout;
