import React from "react";
import "./Header.css";
import DarkModeIcon from "../../icons/darkmode.svg";
import DarkModeIconDark from "../../icons/darkModeDark.svg";

const Header = ({ toggleDarkMode, darkMode }) => {
  return (
    <div className={`header ${darkMode ? "headerDark" : ""}`}>
      <div className="headerName">Where in the world?</div>
      <div className="logoContainer" onClick={toggleDarkMode}>
        <img src={darkMode ? DarkModeIconDark : DarkModeIcon} alt="Dark Mode Icon" />
      </div>
    </div>
  );
};

export default Header;
