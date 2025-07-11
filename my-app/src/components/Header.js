import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from "react-router";

export default function Header() {

  let result = useSelector(state=> state.cart.cartData)
  console.log(result);
  console.log(result.length);

  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/add-rest">Add-Rest</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/show-res">Show-Rest</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/counter">State-Variable</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/comp1">Comp1</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/showRestClass">Show-Rest-Class</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/addRestClass">Add-Rest-Class</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/search">Link</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/error">Error</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/statelift">State Lift</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/products">Products</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/cart">Cart({result.length})</Link>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" aria-disabled="true">Disabled</a>
          </li>
        </ul>
      </div>
    </div>
  </nav> 
  )
}
