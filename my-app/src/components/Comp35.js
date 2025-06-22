import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export default function Comp35() {

    var categoryvalue = useSelector(state=> state.category.categoryName)
    
    var[api,setApi] = useState([]);

    useEffect(()=>{
        var apiPath = `https://fakestoreapi.com/products/category/${categoryvalue}`
        console.log(apiPath);
        
        axios.get(apiPath).then(res=>{
            console.log(res.data);
            setApi(res.data);
        });
      },[categoryvalue]);

  return (
    <div>
        <h1>From Redux , {categoryvalue}</h1>
        <div className='row border border-5'>
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
