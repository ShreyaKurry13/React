import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./components/App";


const projectRoute = (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
    </Routes>
  </BrowserRouter>
);

export default projectRoute;
