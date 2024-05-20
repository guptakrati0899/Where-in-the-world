import React from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../../DataContext";
import "./DetailsPage.css";
import BackIcon from "../../icons/BACK.svg";
import BackIconDarkMode from "../../icons/backDarkMode.svg";

const DetailsPage = ({ darkMode }) => {
  const fallbackImageUrl =
    "https://cdn.touchdynamic.com/wp-content/uploads/2015/11/bigstock-Demo-77033156small.jpg";
  const { countryData } = useData();
  const navigate = useNavigate();
  console.log("wjdwjdwe", countryData);

  return (
    <div className={darkMode ? "detailsPage dark" : "detailsPage"}>
      <img
        src={darkMode? BackIconDarkMode: BackIcon}
        className="clickable"
        alt="Back Icon"
        onClick={() => navigate("/")}
      />
      <div className="detailsContainer">
        <img
          className="countryImg"
          src={countryData?.coatOfArms?.png || fallbackImageUrl}
        />
        <div className="details">
          <span className="countryTitle">{countryData?.name?.common}</span>
          <div className="countryDetails">
            <div>
              <div>
                <span className="heading">Native Name: </span>
                <span className="description">
                  {countryData?.name?.nativeName?.official}
                </span>
              </div>
              <div>
                <span className="heading">Population: </span>
                <span className="description">{countryData?.population}</span>
              </div>
              <div>
                <span className="heading">Region: </span>
                <span className="description">{countryData?.region}</span>
              </div>
              <div>
                <span className="heading">Sub Region: </span>
                <span className="description">{countryData?.subregion}</span>
              </div>
              <div>
                <span className="heading">Capital: </span>
                <span className="description">{countryData?.capital}</span>
              </div>
            </div>
            <div>
              <div>
                <span className="heading">Top Level Domain: </span>
                <span className="description">{countryData?.tld}</span>
              </div>
              <div>
                <span className="heading">Currencies: </span>
                <span className="description">
                  {Object.values(countryData?.currencies)[0]?.name}
                </span>
              </div>
              <div>
                <span className="heading">Languages: </span>
                <span className="description">
                  {Object.values(countryData?.languages)[0]}
                </span>
              </div>
            </div>
          </div>
          <div className="container">
            <span className="heading">Border Countries: </span>
            {countryData?.borders?.map((label, index) => (
              <button className={darkMode?"bordersButton dark":"bordersButton"} key={index}>
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
