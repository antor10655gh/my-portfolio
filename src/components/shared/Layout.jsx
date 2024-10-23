// eslint-disable-next-line no-unused-vars
import React from "react";
import Header from "./Header";
import AppRoute from "../../routes/AppRoute";
import GoToTop from "../GoToTop/GoToTop";

const Layout = () => {
  return (
    <div className="relative">
      <Header />
      <AppRoute />
      <GoToTop />
    </div>
  );
};

export default Layout;
