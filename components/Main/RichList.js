import React, { useState } from "react";
import richlist from "../../lib/richlist.json";
import Card from "./Card";

export default function RichList() {
  return (
    <div className="box shadow" style={{ borderRadius: "50px", margin: "15px", height: "440px" }}>
      <button
        type="button"
        className="btn btn-lg m-3"
        style={{ borderRadius: "25px", width: "300px", height: "50px", backgroundColor: "#21F01D" }}
      >
        
      </button>
      <form className="form-inline float-right m-3">
        <input
          class="form-control sm-2 w-500"
          type="search"
          placeholder="Search"
          aria-label="Search"
          style={{ borderRadius: "25px", width: "700px", height: "50px" }}
        />
      </form>
      <div style={{ borderRadius: "50px", borderStyle: "solid", borderColor: "black", margin: "15px" }}>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Coins</th>
            <th scope="col">No of Address</th>
            <th scope="col">Balance</th>
            <th scope="col">Value USD</th>
          </tr>
        </thead>
        {richlist.map((coin) => (
          <tbody>
            <tr>
              <td>{coin.coins}</td>
              <td>{coin.address}</td>
              <td>{coin.balance}</td>
              <td>{coin.value}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
    </div>
  );
}
