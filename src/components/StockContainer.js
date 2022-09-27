import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks }) {

  // everytime we render we iterate always use map
  const renderStocks = () => {
    return stocks.map(stock => {
      return <Stock key={stock.id} stock={stock} />
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
