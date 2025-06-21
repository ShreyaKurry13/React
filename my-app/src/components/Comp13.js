import React, { useContext } from 'react';
import contextApi from '../contextApi';

export default function Comp13() {

  var result = useContext(contextApi)

  return (
    <div className="border border-5 p-5">
      <p>Comp13 , {result}</p>
    </div>
  )
}
