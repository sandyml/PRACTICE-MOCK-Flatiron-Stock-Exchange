import React, { useEffect, useState } from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";

function App() {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/stocks`) 
    .then(resp => resp.json())
    .then(setStocks)
  }, [])

  
  return (
    <div>
      <Header />
      <MainContainer />
    </div>
  );
}

export default App;
