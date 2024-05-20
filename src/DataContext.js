// DataContext.js
import React, { createContext, useState, useContext } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [countryData, setCountryData] = useState(null);

  return (
    <DataContext.Provider value={{ countryData, setCountryData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
