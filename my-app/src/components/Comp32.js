import React from 'react'

export default function Comp32(props) {
    function myFunc(ev){
        console.log(ev.target.innerText);
        props.p1(ev.target.innerText);
    }

  return (
    <div>
        <li onClick={myFunc}>electronics</li>
        <li onClick={myFunc}>jewelery</li>
        <li onClick={myFunc}>men's clothing</li>
        <li onClick={myFunc}>women's clothing</li>
    </div>
  )
}
