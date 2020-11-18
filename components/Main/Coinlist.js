import React, { useState } from "react";
import coindata from "../../lib/coindata.json";
import Card from "./Card"

export default function CoinList() {
  //     const [ coinData, setCoinData ] = useState([]);
  //   const requestOptions = {
  //     method: "GET",
  //     url: "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
  //     qs: {
  //       start: "1",
  //       limit: "5000",
  //       convert: "USD",
  //     },
  //     headers: {
  //       "X-CMC_PRO_API_KEY": "37629b26-a265-4c4f-8d80-0a697c05e5ac",
  //     },
  //     json: true,
  //     gzip: true,
  //   };

  //   fetch(requestOptions)
  //     .then((response) => {
  //         setCoinData(response)
  //       console.log("API call response:", response);
  //     })
  //     .catch((err) => {
  //       console.log("API call error:", err.message);
  //     });

  return (
    <div className="mx-auto">
        <Card />
      <h1>Current Blockchain Statistics</h1>
      {coindata.map((coin) => (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Parameter</th>
              <th scope="col">Statistics</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{coin.parameter}</td>
              <td>{coin.stats}</td>
            </tr>
          </tbody>
        </table>
      ))}
    </div>
  );
}
