import React from 'react';
import "../styles/Main.css";
import Sidebar from "./Sidebar";
import Swipe from "./Swipe";

export default function Main() {
    return (
       
        <div className="app">
            <div className="app_body">
                <Sidebar />
                <Swipe />
            </div>
        </div>
    )
}
