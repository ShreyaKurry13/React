import axios from 'axios';
import React, { Component } from 'react'


export default class AddRestClass extends Component {

    constructor(){
        super();
        this.x1 = React.createRef();
        this.x2 = React.createRef();
        this.x3 = React.createRef();
        this.x4 = React.createRef();
    }

    addRecord(){
        // alert();
        console.log(this.x1.current.value);
        var dataToStore = {
            name:this.x1.current.value,
            cuisine:this.x2.current.value,
            branches:this.x3.current.value,
            restaurantId:this.x4.current.value
        }

        var result = axios.post('http://localhost:8787/restaurants',dataToStore);
        console.log(result);
        alert("Restaurant Added Successfully");
    }

  render() {
    return (
      <div className="container">
        <h1>Add Record in Rest</h1>
        <input ref={this.x1} type="text" placeholder='Name'/><br /><br />
        <input ref={this.x2} type="text" placeholder='Cuisine'/><br /><br />
        <input ref={this.x3} type="text" placeholder='branches'/><br /><br />
        <input ref={this.x4} type="text" placeholder='restaurantId'/><br /><br />
        <button className='btn btn-primary' onClick={() =>{ this.addRecord()}}>Add Restaurant</button>
      </div>
    )
  }
}
