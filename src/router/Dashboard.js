import React from "react";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="wrapper">
      {/* <Header /> */}
      top
      <div className="main">
        <Outlet />
      </div>
      bottom
      {/* <Footer /> */}
    </div>
  );
};

export default Dashboard;
