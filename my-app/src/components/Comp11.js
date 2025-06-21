import React, { useRef, useState } from 'react'
import Comp12 from './Comp12'
import contextApi from '../contextApi';


export default function Comp11() {

  var x1 = useRef();
  var [category,setCategory] = useState('');

  function myFunc(){
    console.log(x1.current.value);
    setCategory(x1.current.value);
  }

  return (
    <div className="container border border-5 p-5">
        <input ref={x1} type="text" placeholder='CategoryName' />
        <button onClick={myFunc}>Search</button>
        {category}
        <hr />

        <contextApi.Provider value={category}>
            <Comp12 p1={category}/>
        </contextApi.Provider>
    </div>
  )
}
