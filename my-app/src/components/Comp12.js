import React from 'react'
import Comp13 from './Comp13'
import Comp14 from './Comp14'


export default function Comp12(props) {
  return (
     <div className="border border-5 p-5">
      {props.p1}
        <div className="row">
          <div className="col-3">
              <Comp13/>
          </div>
          <div className="col-9">
              <Comp14 p2={props.p1}/>
          </div>
        </div>
     </div>
  )
}
