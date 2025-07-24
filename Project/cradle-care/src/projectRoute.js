import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./components/App";
import Home from "./components/Home";
import Prime from "./components/Prime";
import ChatBot from "./components/ChatBot";
import Sos from "./components/Sos";

const projectRoute = (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="prime" element={<Prime />} />
        <Route path="chatbot" element={<ChatBot />} />
        <Route path="sos" element={<Sos />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default projectRoute;
