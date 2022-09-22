import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";
import Stock from "./Stock";
import { stocksUrl } from "../Global";

function MainContainer() {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    fetch(stocksUrl)
    .then(resp => resp.json())
    .then(data => setStocks(data))
  }, [])

  // everytime we render we iterate always use map
  const renderStocks = () => {
    return stocks.map(stock => {
      return <Stock key={stock.id} stock={stock}/>
    })
  }

  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer renderStocks={renderStocks} />
        </div>
        <div className="col-4">
          <PortfolioContainer />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
