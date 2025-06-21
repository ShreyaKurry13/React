import React from 'react'
import Comp22 from './Comp22'
import ErrorBoundary from '../ErrorBoundary'

export default function Comp21() {
  return (
    <div className='container'>
        <h1>Comp21 - Error Boundary Example</h1>
        <div className='row'>
            <div className='col-4'>
                <Comp22 path="https://image.hm.com/assets/hm/d8/69/d869b4739780e952db1348a66ca85fbedf2ed9ec.jpg?imwidth=768"/>
            </div>
            <div className='col-4'>
                <Comp22 path="https://image.hm.com/assets/hm/d5/5e/d55e7a732cda5972f36dbf8d173b1dfe3dfca8f1.jpg?imwidth=384"/>
            </div>
            <div className='col-4'>
                <ErrorBoundary>
                    <Comp22 path=""/>
                </ErrorBoundary>
            </div>
        </div>
    </div>
  )
}

// https://image.hm.com/assets/hm/09/14/09143164d26122b35b9203d91fdd880b73f507b3.jpg?imwidth=768