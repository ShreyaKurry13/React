import axios from 'axios';
import React, { Component } from 'react'


export default class ShowRestClass extends Component {

    constructor(){
        super();
        this.state = {
            api:[]
        }
    }

    componentDidMount(){
        axios
        .get('http://localhost:8787/restaurants')
        .then((result)=>{
        console.log(result);
        console.log(result.data);
        this.setState({
            api:result.data
        })
        })
        .catch((err)=>{
            console.log(err);
        });
    }
  render() {

    var record = this.state.api;

    return (
    <div className='container'>
        <h1>Show Rest API</h1>

        <div className="table-responsive">
  <table className="table table-striped table-bordered table-hover">
    <thead className="table-dark">
      <tr>
        <th scope="col">Id</th>
        <th scope="col">Name</th>
        <th scope="col">Cuisine</th>
        <th scope="col">Branches</th>
      </tr>
    </thead>
    <tbody>
      {
        record && record.map(
          value =>
            <tr key={value.restaurantId}>
              <td>{value.restaurantId}</td>
              <td>{value.name}</td>
              <td>{value.cuisine}</td>
              <td>{value.branches}</td>
            </tr>
        )
      }
    </tbody>
  </table>
</div>

    </div>
    )
  }
}
