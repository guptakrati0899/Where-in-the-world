import React from "react";
import "./Header.css";
import DarkModeIcon from "../../icons/darkmode.svg";
import DarkModeIconDark from "../../icons/darkModeDark.svg";

const Header = ({ toggleDarkMode, darkMode }) => {
  return (
    <>
      <div className={darkMode ? "header headerDark" : "header"}>
        <div className="headerName">Where in the world?</div>
        <div className="logoContainer">
          <img
            src={darkMode ? DarkModeIconDark : DarkModeIcon}
            alt="Dark Mode Icon"
            onClick={toggleDarkMode}
          />
        </div>
      </div>
    </>
  );
};

export default Header;
