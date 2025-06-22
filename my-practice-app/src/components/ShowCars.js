import axios from "axios";
import React, { useEffect, useState } from "react";

export default function ShowCars() {
  var [apidata, setApidata] = useState([]);

  useEffect(() => {
    console.log("component mounted");
    console.log("call api");
    axios
      .get("http://localhost:8989/cars-api")
      .then((result) => {
        console.log(result);
        console.log(result.data);
        setApidata(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container">
      <h1>Data From API</h1>

      <div className="table-responsive">
        <table className="table table-striped table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Make</th>
              <th scope="col">Model</th>
              <th scope="col">Price</th>
              <th scope="col">Release Year</th>
            </tr>
          </thead>
          <tbody>
            {apidata && apidata.map((value) => (
                <tr key={value.carId}>
                  <td>{value.carId}</td>
                  <td>{value.make}</td>
                  <td>{value.model}</td>
                  <td>{value.price}</td>
                  <td>{value.year}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
