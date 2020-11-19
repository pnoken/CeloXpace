import React, { useState } from "react";
import coindata from "../../lib/coindata.json";
import Card from "./Card";

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
    <>
      <div
        className="mx-auto box shadow"
        style={{
          borderRadius: "50px",
          height: "300px",
          backgroundColor: "#F49F00",
          zIndex: "-1",
          marginBottom: "-100px",
        }}
      >
        <h1 className="text-center text-uppercase text-light p-5">
          Celo Stats in one place
        </h1>
      </div>
      <div
        className="box shadow w-10"
        style={{
          borderRadius: "50px",
          zIndex: 1000,
          backgroundColor: "white",
          margin: "15px",
        }}
      >
        <Card />
        <div className="m-5">
          <h5 className="text-uppercase text-center">
            Current Blockchain Statistics
          </h5>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Parameter</th>
                <th scope="col">Statistics</th>
              </tr>
            </thead>
            {coindata.map((coin) => (
              <tbody>
                <tr>
                  <td>{coin.parameter}</td>
                  <td>{coin.stats}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
        
      </div>
    </>
  );
}
