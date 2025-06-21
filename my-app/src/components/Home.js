import React from 'react'
import Product from './Product'

export default function Home() {
  return (
    <div className='container'>
        <h1>Products</h1>
        <div className="row">
            <div className="col-xl-3">
                <Product price="1000" path="https://image.hm.com/assets/hm/02/ad/02ad93ccfd32138617d87ddce60071dd7704afee.jpg?imwidth=1536" name=""/>
            </div>
            <div className="col-xl-3">
                <Product price="2000" path="https://image.hm.com/assets/hm/6d/34/6d34a7290ecc4fd66a0e522853f37b9f39e7b472.jpg?imwidth=1536" name=""/>
            </div>
            <div className="col-xl-3">
                <Product price="3000" path="https://image.hm.com/assets/hm/1e/f8/1ef81d6062e8b63407cfb8a2a9c58a32530e46a8.jpg?imwidth=1536" name=""/>
            </div>
            <div className="col-xl-3">
                <Product price="4000" path="https://image.hm.com/assets/hm/1b/dd/1bdde566e9868ee41f473d270cf53dee5386176c.jpg?imwidth=1536" name=""/>
            </div>
        </div>
    </div>
  )
}
