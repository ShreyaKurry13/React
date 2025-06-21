import axios from 'axios';
import React, { useEffect, useState } from 'react'


export default function ShowRestaurant() {

  var [apidata,setApidata] = useState([]);

  useEffect(()=>{
    console.log('component mounted');
    console.log('call api');
    axios
    .get('http://localhost:8787/restaurants')
    .then((result)=>{
      console.log(result);
      console.log(result.data);
      setApidata(result.data);
    })
    .catch((err)=>{
        console.log(err);
    });
  },[])

  return (
    <div className="container">
      <h1>Data From API</h1>

      <div className="table-responsive">
  <table className="table table-striped table-bordered table-hover">
    <thead className="table-dark">
      <tr>
        <th scope="col">Id</th>
        <th scope="col">Name</th>
        <th scope="col">Cuisine</th>
        <th scope="col">Branches</th>
      </tr>
    </thead>
    <tbody>
      {
        apidata && apidata.map(
          value =>
            <tr key={value.restaurantId}>
              <td>{value.restaurantId}</td>
              <td>{value.name}</td>
              <td>{value.cuisine}</td>
              <td>{value.branches}</td>
            </tr>
        )
      }
    </tbody>
  </table>
</div>


    </div>
  )
}