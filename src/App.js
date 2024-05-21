import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import { CssBaseline } from "@mui/material";
import Header from "./pages/header/Header";
import HomePage from "./pages/homepage/HomePage";
import DetailsPage from "./pages/detailspage/DetailsPage";
import { DataProvider } from "./DataContext";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Function to toggle between light and dark themes
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Define your custom theme
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light", // Apply dark mode if enabled
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="App">
          <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <DataProvider>
            <Routes>
              <Route path="/" element={<HomePage darkMode={darkMode} />} />
              <Route path="/detailsPage" element={<DetailsPage darkMode={darkMode} />} />
            </Routes>
          </DataProvider>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
