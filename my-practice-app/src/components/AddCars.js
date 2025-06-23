import axios from 'axios';
import React, { useRef } from 'react'
import { useNavigate } from 'react-router'

export default function AddCars() {

  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();

  let navigate = useNavigate();

  function addRecord(){
    // alert();
    console.log(ref1.current.value);
    var dataStore = {
      carId:ref1.current.value,
      make:ref2.current.value,
      model:ref3.current.value,
      price:ref4.current.value,
      year:ref4.current.value,
    }

    var result = axios.post('http://localhost:8989/cars-api',dataStore);
    console.log(result);
    alert("Car Added Successfully");
    navigate("/show-cars");
  }

  return (
    <div className="container">
      <h1>Add Car</h1>
      <input ref={ref1} type="text" placeholder='Car Id'/><br /><br />
      <input ref={ref2} type="text" placeholder='Car Name'/><br /><br />
      <input ref={ref3} type="text" placeholder='Car Model'/><br /><br />
      <input ref={ref4} type="text" placeholder='Price'/><br /><br />
      <input ref={ref5} type="text" placeholder='Release Year'/><br /><br />
      <button className='btn btn-warning' onClick={addRecord}>Add Restaurant</button>
  </div>
  )
}
