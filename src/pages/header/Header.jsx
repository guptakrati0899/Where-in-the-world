import React from "react";
import "./Header.css";
import DarkModeIcon from "../../icons/darkmode.svg"

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="headerName">
          Where in the world?
        </div>
        <div className="logoContainer">
            <img src={DarkModeIcon} alt="Dark Mode Icon" />
        </div>
      </div>
    </>
  );
};

export default Header;
