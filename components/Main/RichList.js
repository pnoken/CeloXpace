import React, { useState } from "react";
import richlist from "../../lib/richlist.json";
import Card from "./Card";

export default function RichList() {
  return (
    <div className="box shadow vh-100 container" style={{ borderRadius: "50px"}}>
      <div className="row justify-content-between m-3"> 
      <button
        type="button"
        className="btn btn-lg col-4"
        style={{ borderRadius: "25px", height: "50px", backgroundColor: "#21F01D" }}
      >  
      </button>
      
      <form className="col-4">
        <input
          className="form-control"
          type="search"
          placeholder="Search"
          aria-label="Search"
          style={{ borderRadius: "25px", height: "50px" }}
        />
      </form>
      
      </div>
      
      <div className="m-3 row" style={{ borderRadius: "50px", borderStyle: "solid", borderColor: "black"}}>
      <table className="table col">
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
