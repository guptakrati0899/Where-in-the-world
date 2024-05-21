import React, { useEffect, useState, useCallback } from "react";
import "./HomePage.css";
import FormControl from "@mui/material/FormControl";
import { Box, Card, CardContent, CardMedia, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useData } from "../../DataContext";

const HomePage = ({ darkMode }) => {
  const [data, setData] = useState([]);
  const [countries, setCountries] = useState([]);
  const [value, setValue] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        const countriesData = response.data;
        setData(countriesData);
        setCountries(countriesData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const navigate = useNavigate();
  const { setCountryData } = useData();
  const filterOptions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  
  const handleChange = useCallback((event) => {
    setValue(event.target.value);
    setData(countries?.filter((country) => country.region === event.target.value));
  }, [countries]);
  
  const handleSearchChange = useCallback((event) => {
    const { value } = event.target;
    setSearchTerm(value);
    const filtered = countries.filter((country) =>
      country?.name?.common?.toLowerCase().includes(value.toLowerCase())
    );
    setData(filtered);
  }, [countries]);
  
  const handleClick = (country) => {
    setCountryData(country);
    navigate("/detailsPage");
  };

  const fallbackImageUrl = "https://cdn.touchdynamic.com/wp-content/uploads/2015/11/bigstock-Demo-77033156small.jpg";

  return (
    <div className={`homePageContainer ${darkMode ? "dark" : ""}`}>
      <div className="filterContainer">
        <TextField
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search for a country..."
          className={darkMode ? "searchDark" : ""}
        />
        <FormControl>
          {value === "" && <InputLabel className={darkMode ? "menuDark" : ""} shrink={false}>Filter By Region</InputLabel>}
          <Select
            className={darkMode ? "filterRegion dark" : "filterRegion"}
            value={value}
            onChange={handleChange}
          >
            {filterOptions.map((region, index) => (
              <MenuItem key={index} className={darkMode ? "menuDark" : ""} value={region}>
                {region}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className="cardsContainer">
        <Box
          display="grid"
          gap={2}
          gridTemplateColumns={{
            sm: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
        >
          {data.map((country, index) => (
            <CountryCard
              key={index}
              darkMode={darkMode}
              country={country}
              handleClick={() => handleClick(country)}
              fallbackImageUrl={fallbackImageUrl}
            />
          ))}
        </Box>
      </div>
    </div>
  );
};

const CountryCard = ({ darkMode, country, handleClick, fallbackImageUrl }) => {
  return (
    <Card
      className={`card${darkMode ? "darkMode" : ""}`}
      sx={{
        width: 264,
        transition: "box-shadow 0.3s",
        "&:hover": {
          boxShadow: "0px 4px 6px lightBlue",
          cursor: "pointer",
        },
      }}
      onClick={handleClick}
    >
      <CardMedia sx={{ height: 160 }} image={country?.coatOfArms?.png || fallbackImageUrl} />
      <CardContent>
        <span className="countryName">{country?.name?.common}</span>
        <div className="countryContent">
          <span className="subHead">Population: </span>
          <span className="subDesc">{country?.population}</span>
        </div>
        <div className="countryContent">
          <span className="subHead">Region: </span>
          <span className="subDesc">{country?.region}</span>
        </div>
        <div className="countryContent">
          <span className="subHead">Capital: </span>
          <span className="subDesc">{country?.capital}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default HomePage;
