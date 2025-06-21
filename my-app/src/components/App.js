import React from "react";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import { Outlet } from "react-router";

function App(){
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    );
}

export default App;