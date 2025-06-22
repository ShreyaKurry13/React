import React from 'react'
import { categoryDataTransferAction } from '../redux/slices/categorySlice';
import { useDispatch } from 'react-redux';

export default function Comp32(props) {
  let dispatch = useDispatch();

    function myFunc(ev){
        console.log(ev.target.innerText);
        props.p1(ev.target.innerText);
    }

    function myFunc1(ev){
      console.log(ev.target.innerText);
      dispatch(categoryDataTransferAction(ev.target.innerText));
  }

  return (
    <>
      <div>
          <li onClick={myFunc}>electronics</li>
          <li onClick={myFunc}>jewelery</li>
          <li onClick={myFunc}>men's clothing</li>
          <li onClick={myFunc}>women's clothing</li>
      </div>
      <hr/>
      <div>
          <li onClick={myFunc1}>electronics</li>
          <li onClick={myFunc1}>jewelery</li>
          <li onClick={myFunc1}>men's clothing</li>
          <li onClick={myFunc1}>women's clothing</li>
      </div>
    </>
  )
}
