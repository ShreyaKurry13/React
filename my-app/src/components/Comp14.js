import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Comp14(props) {

  var[api,setApi] = useState([]);
  useEffect(()=>{
    console.log('api',props.p2);
    var apiPath = `https://fakestoreapi.com/products/category/${props.p2}`
    console.log();
    
    axios.get(apiPath).then(res=>{
        console.log(res.data);
        setApi(res.data);
    });
  },[props.p2]);

  return (
    <div className="border border-5 p-5">
      {props.p2}
      <p>Comp14</p>
      <div className='row'>
        {
          api && api.map(val => 
            <div className='col-3'>
                <img className='img-fluid' src={val.image}/>
                <p>{val.title}</p>
            </div>
          )
        }
      </div>
    </div>
  )
}
