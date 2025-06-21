import React from 'react'
import { useRef } from 'react';
import axios from 'axios';

export default function AddRestaurant() {

  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();

  function addRecord(){
    console.log(ref1);
    console.log(ref1.current.value);
    // alert("hello");    
    var dataToStore = {
      name:ref1.current.value,
      cuisine:ref2.current.value,
      branches:ref3.current.value,
      restaurantId:ref4.current.value
    }

    var result = axios.post('http://localhost:8787/restaurants',dataToStore);
    console.log(result);
    alert("Restaurant Added Successfully");
  }

  
  return (
    <div className="container">
      <h1>Add Restaurant</h1>
      <input ref={ref1} type="text" placeholder='Name'/><br /><br />
      <input ref={ref2} type="text" placeholder='Cuisine'/><br /><br />
      <input ref={ref3} type="text" placeholder='branches'/><br /><br />
      <input ref={ref4} type="text" placeholder='restaurantId'/><br /><br />
      <button className='btn btn-warning' onClick={addRecord}>Add Restaurant</button>
    </div>
  )
}
