
import './App.css';
// import { useState } from 'react';
import Header from './components/Header';
import Signup from './pages/Signup';
import Approute from './route/Approute';


function App() {
  // const [darkMode, setDarkMode] = useState(false);
  //   const [stockSymbol, setStockSymbol] = useState("MSFT");
  return (
    
    <div className="App">
      <Header/>
      {/* <Signup/> */}
     
      <Approute/>
    </div>
  );
}

export default App;
