import React from "react";

import "../stylesheets/App.css";

export default function App(): JSX.Element {
    function searchBarValueChanged(): void {
        const contentDiv: HTMLDivElement = document.getElementById("content") as HTMLDivElement;
        const searchBar: HTMLInputElement = document.getElementById("search-bar") as HTMLInputElement;
        contentDiv.innerText = searchBar.value;
    }

    return (
        <>
            <div id={"navbar"}>
                <div id={"navbar-left"}>
                    <h1>Navbar</h1>

                    <a href={"#home"} className={"toggle"}><h2>Home</h2></a>
                    <a href={"#author"} className={"toggle"}><h2>Author</h2></a>
                    <a href={"#about"} className={"toggle"}><h2>About</h2></a>
                </div>

                <div id={"navbar-right"}>
                    <input placeholder={"Enter search key..."} id={"search-bar"} autoComplete={"off"} type={"text"} onChange={searchBarValueChanged}/>
                    <button className={"button"} onClick={() => { window.open("https://www.github.com/giorgosathanasopoulos/react-navbar", "_blank"); }}>Source code</button>
                    <button className={"button"} onClick={() => { window.open("https://www.github.com/giorgosathanasopoulos", "_blank"); }}>Author's github</button>
                </div>
            </div>
            <div id={"content"}></div>
        </>
    );
};