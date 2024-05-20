import Header from "./pages/header/Header";
import HomePage from "./pages/homepage/HomePage";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DetailsPage from "./pages/detailspage/DetailsPage";
import { DataProvider } from "./DataContext";
import { useState } from "react";
import {createTheme, ThemeProvider } from "@mui/material";
import { CssBaseline } from '@mui/material';


function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Function to toggle between light and dark themes
  const toggleDarkMode = () => {
    console.log("hiiii");
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className="App">
          <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <DataProvider>
            <Routes>
              <Route path="/" element={<HomePage darkMode={darkMode}/>} />
              <Route path="/detailsPage" element={<DetailsPage darkMode={darkMode} />} />
            </Routes>
          </DataProvider>
      </div>
    </Router>
  );
}

export default App;
