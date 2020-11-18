import React, { useState } from "react";
import richlist from "../../lib/richlist.json";
import Card from "./Card";

export default function RichList() {
  return (
    <div className="mx-auto">
      <button
        type="button"
        className="btn btn-lg"
        style={{ backgroundColor: "#21F01D" }}
      >
        Empty
      </button>
      <form class="form-inline">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </form>
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
  );
}
