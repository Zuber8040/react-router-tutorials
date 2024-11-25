import React from "react";
import NavBar from "../Components/NavigationBar";
import { Outlet } from "react-router-dom";
const AppLayout = () => {
  return (
    <div>
      <NavBar />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
