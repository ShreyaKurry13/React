import React from "react";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import { Outlet } from "react-router";
import { projectStore } from "../redux/projectStore";
import { Provider } from 'react-redux'

function App(){
    return (
        <>
        <Provider store={projectStore}>
            <Header/>
            <Outlet/>
            <Footer/>
        </Provider>
        </>
    );
}

export default App;