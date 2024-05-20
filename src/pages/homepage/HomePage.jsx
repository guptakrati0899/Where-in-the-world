import React, { useEffect, useState } from "react";
import "./HomePage.css";
import FormControl from "@mui/material/FormControl";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { lightBlue } from "@mui/material/colors";
import { Link, useNavigate } from "react-router-dom";
import { useData } from "../../DataContext";

const HomePage = ({ darkMode }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        // Do something with the data
        setData(response.data);
        console.log("dataa", response.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const navigate = useNavigate();
  const { setCountryData } = useData();

  const handleClick = (country) => {
    setCountryData(country);
    navigate("/detailsPage");
  };

  const fallbackImageUrl =
    "https://cdn.touchdynamic.com/wp-content/uploads/2015/11/bigstock-Demo-77033156small.jpg";

  return (
    <div className={darkMode ? "homePageContainer dark" : "homePageContainer"}>
      <div className="filterContainer">
        <TextField defaultValue="Hello World" />
        <FormControl sx={{ minWidth: 120 }}>
          <Select displayEmpty inputProps={{ "aria-label": "Without label" }}>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
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
            <Card className={darkMode?"carddarkMode":""}
              key={index}
              sx={{
                width: 264,
                transition: "box-shadow 0.3s",
                "&:hover": {
                  boxShadow: "0px 4px 6px lightBlue",
                  cursor: "pointer"
                },
              }}
              onClick={() => handleClick(country)}
            >
              <CardMedia
                sx={{ height: 160 }}
                image={country?.coatOfArms?.png || fallbackImageUrl}
              />
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
          ))}
        </Box>
      </div>
    </div>
  );
};

export default HomePage;
