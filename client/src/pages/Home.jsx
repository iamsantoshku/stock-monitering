import React from 'react'
import { useState } from "react";
import Dashboard from "../components/Dashboard";
import StockContext from "../context/StockContext";
import ThemeContext from "../context/ThemeContext";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [stockSymbol, setStockSymbol] = useState("MSFT");
  return (
     <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
     <StockContext.Provider value={{ stockSymbol, setStockSymbol }}>
       <Dashboard />
     </StockContext.Provider>
   </ThemeContext.Provider>
    
  )
}

export default Home
