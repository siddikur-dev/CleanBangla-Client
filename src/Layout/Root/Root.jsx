import React from "react";
import Navbar from "../../Component/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../../Component/Footer/Footer";

const Root = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Root;
