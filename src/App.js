import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Nav from "./components/Navbar";

export default function App(){
    return(
        <div className="container">
            <Nav />
            <Main />
        </div>
    )
}