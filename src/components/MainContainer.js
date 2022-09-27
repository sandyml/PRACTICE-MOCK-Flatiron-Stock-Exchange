import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";
import { stocksUrl } from "../Global";

function MainContainer() {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    fetch(stocksUrl)
    .then(resp => resp.json())
    .then(data => setStocks(data))
  }, [])


  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks}/>
        </div>
        <div className="col-4">
          <PortfolioContainer />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
