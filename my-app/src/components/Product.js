import React from 'react'

export default function Product(props) {
  return (
    <div className='text-center'>
        <img src={props.path} alt='' className='img-fluid'/>
        <h2>{props.price}</h2>
        <p>Restaurant</p>
        <p>
            <button className='btn btn-success'>Add to Cart</button>
        </p>
    </div>
  )
}
