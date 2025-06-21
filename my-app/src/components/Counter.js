import React, { useState } from 'react'

export default function Counter(props) {

  //data --> state variable name
  //setData --> a dispatcher func, this func will update values in a state vaiable
  var [data,setData] = useState(100);
  var [username,setUsername] = useState('Shreya');
  var [brand,setBrand] = useState(['Coach','LV','Gucci','Prada']);

  function updateRec(){
    setData(data+500);
    setUsername('Shreya Kurry');
    setBrand(['aldo','sugar','plum','swiss'])
    props.color = 'yellow'
  }
  return (
    <div className="container">
      <h1>State Variable</h1>
      <p>{data}</p>
      <p>{username}</p>
      <li>{brand[0]}</li>
      <li>{brand[1]}</li>
      <li>{brand[2]}</li>
      <li>{brand[3]}</li>
      <button onClick={updateRec} className='btn btn-primary'>Update</button>
      <p>{props.color}</p>
    </div>
  )
}
