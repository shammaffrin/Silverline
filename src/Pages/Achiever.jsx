import React from "react";
import AchieversBoard from "../Components/OverVIEWABoard";
import LoginNavbar from "../Components/LoginNavbar";

const Achiever = () => {
  return (
    <div>
      <LoginNavbar />
      <div className="pt-30">
        <AchieversBoard />
      </div>
    </div>
  );
};

export default Achiever;
