import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function ShowCar() {

    var[apidata,setApidata] = useState([]);

    useEffect(() =>{
        axios.get("http://localhost:8989/cars-api")
        .then((result) =>{
            console.log(result.data);
            setApidata(result.data);
        })
        .catch((error) =>{
            console.log(error);
        });
    },[])

  return (
    <div className='container bg-danger-subtle'>
        <h1 className='text-center p-3 text-primary'>Cars for Sale</h1>

        <div className="table-responsive">
        <table className="table table-striped table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Make</th>
              <th scope="col">Model</th>
              <th scope="col">Price</th>
              <th scope="col">Year</th>
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
  )
}
