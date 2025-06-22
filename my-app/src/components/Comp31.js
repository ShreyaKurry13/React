import React, { useState } from 'react'
import Comp32 from './Comp32'
import Comp33 from './Comp33'
import Comp35 from './Comp35';

export default function Comp31() {
    var [category,setCategory] = useState('');
function parentCompFunc(data){
    console.log("Parent Comp func called",data);
    setCategory(data);
}

  return (
    <div className="container">
        <h1> State Lifting - Comp31 , {category}</h1>
        <div className="row">
            <div className="col-3 border border-5 p-3">
                <Comp32 p1={parentCompFunc}/>
            </div>
            <div className="col-9 border border-5 p-4">
                <Comp33 p2={category}/>
                <Comp35/>
            </div>
        </div>
    </div>
  )
}
