import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "components/Footer";
import Header from "components/Header";

export default () => (
  <div>
    <Header />
    <main className="Content">
      <Outlet />
    </main>
    <Footer />
  </div>
);
