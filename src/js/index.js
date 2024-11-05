//import react into the bundle
import React from "react";
import { createRoot } from 'react-dom/client';

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
const root = createRoot(document.getElementById('app'));


let counter = 0;
//render your react application
/* setInterval(function(){
    let six = Math.floor(counter/100000);
    let five = Math.floor(counter/10000);
    let four = Math.floor(counter/1000);
    let three = Math.floor(counter / 100);
    let two = Math.floor(counter / 10);
    let one = Math.floor(counter);
    console.log(six, five, four, three, two, one)
    counter++;
    root.render(<Home six = {six} five = {five} four = {four} three = {three} two = {two} one = {one}/>);
    
}, 1000) */

root.render(<Home six = {six} five = {five} four = {four} three = {three} two = {two} one = {one}/>);




