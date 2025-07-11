import React from 'react'
import { Link } from "react-router";

export default function Header() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/add-cars">Add-Cars</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/show-cars">Show-Cars</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/delete-cars">Delete-Cars</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav> 
  )
}
