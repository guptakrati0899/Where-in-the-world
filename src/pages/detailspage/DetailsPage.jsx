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
  const {
    name,
    coatOfArms,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
    borders,
  } = countryData || {};

  return (
    <div className={`detailsPage ${darkMode ? "dark" : ""}`}>
      <img
        src={darkMode ? BackIconDarkMode : BackIcon}
        className="clickable"
        alt="Back Icon"
        onClick={() => navigate("/")}
      />
      <div className="detailsContainer">
        <img className="countryImg" src={coatOfArms?.png || fallbackImageUrl} alt="Country Coat of Arms" />
        <div className="details">
          <span className="countryTitle">{name?.common}</span>
          <div className="countryDetails">
            <div>
              <DetailRow heading="Native Name:" description={name?.nativeName?.official} />
              <DetailRow heading="Population:" description={population} />
              <DetailRow heading="Region:" description={region} />
              <DetailRow heading="Sub Region:" description={subregion} />
              <DetailRow heading="Capital:" description={capital} />
            </div>
            <div>
              <DetailRow heading="Top Level Domain:" description={tld} />
              <DetailRow heading="Currencies:" description={currencies && Object.values(currencies)[0]?.name} />
              <DetailRow heading="Languages:" description={languages && Object.values(languages)[0]} />
            </div>
          </div>
          <div className="container">
            <span className="heading">Border Countries:</span>
            {borders?.map((label, index) => (
              <button className={`bordersButton ${darkMode ? "dark" : ""}`} key={index}>
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const DetailRow = ({ heading, description }) => {
  return (
    <div>
      <span className="heading">{heading}</span>
      <span className="description">{description}</span>
    </div>
  );
};

export default DetailsPage;
