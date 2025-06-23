/* eslint-disable jsx-a11y/alt-text */
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { addInCart } from '../redux/slices/cartSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';


export default function Products() {

    var[data,setData] = useState([]);
    let dispatch = useDispatch();
    let navigate = useNavigate();

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then(res=>{
            console.log(res.data);
            setData(res.data);
        })
    },[]);
    
    function myFunc(val){
        console.log(val);
        dispatch(addInCart(val));
        navigate("/cart");
    }


  return (
    <div className='container'>
        <h1>All Products</h1>
        <hr/>
        <div className='row'>
        {
          data && data.map(val => 
            <div className='col-3'>
                <img className='img-fluid' src={val.image} />
                <p>{val.title}</p>
                <p>
                    <button className='btn btn-primary' onClick={() =>{ myFunc(val) }}>Add to Cart</button>
                </p>
            </div>
          )
        }
      </div>
    </div>
  )
}
