import React, { useEffect, useState } from "react";
import { stocksUrl } from "../Global";
import Stock from "./Stock";

function StockContainer() {
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
      <h2>Stocks</h2>
      {renderStocks()}
    </div>
  );
}

export default StockContainer;
