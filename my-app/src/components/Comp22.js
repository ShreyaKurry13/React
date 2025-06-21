import React from 'react'

export default function Comp22(props) {
    if (props.path == "") {
        throw new Error('Image Empty');
    }
  return (
    <div>
        <img src={props.path} className='img-fluid'/>
    </div>
  )
}
