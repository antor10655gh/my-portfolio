// eslint-disable-next-line no-unused-vars
import React from "react";
import Header from "./Header";
import AppRoute from "../../routes/AppRoute";

const Layout = () => {
  return (
    <div className="relative">
      <Header />
      <AppRoute />
    </div>
  );
};

export default Layout;
