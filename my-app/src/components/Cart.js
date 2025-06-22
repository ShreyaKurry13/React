import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../redux/slices/cartSlice';

export default function Cart() {

    let result = useSelector(state=> state.cart.cartData)
    console.log(result);

    let dispatch = useDispatch();

    function myFunc(productid){
        dispatch(removeFromCart(productid));
    }

  return (
    <>
    <div className='container'>
        <h1>Cart Data</h1>
        <hr/>
        <div className='row'>
        {
          result && result.map(val => 
            <div className='col-3'>
                <img className='img-fluid' src={val.image}/>
                <p>{val.title}</p>
                <p>
                    <button className='btn btn-danger' onClick={() => { myFunc(val.id) }}>Delete</button>
                </p>
            </div>
          )
        }
        </div>
    </div>
    </>
  )
}
