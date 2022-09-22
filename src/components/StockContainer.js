import React from "react";
import { stocksUrl } from "../Global";
import Stock from "./Stock";

function StockContainer({ renderStocks }) {

  return (
    <div>
      <h2>Stocks</h2>
      {renderStocks()}
    </div>
  );
}

export default StockContainer;
