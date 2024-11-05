//import react into the bundle
import React from "react";
import { createRoot } from 'react-dom/client';
import Counter from "./counter.jsx"
import Clock from "./clock.jsx"
import TimerController from "./timerController.jsx";


const myStyles = {
	width: "70%",
	height: "75vh"
}


//render your react application
const root = createRoot(document.getElementById('app'));
let counter = 0;
let timerID;


timerID = setInterval(function(){
		let six = Math.floor(counter/100000);
		let five = Math.floor(counter/10000);
		let four = Math.floor(counter/1000);
		let three = Math.floor(counter / 100);
		let two = Math.floor(counter / 10);
		let one = Math.floor(counter);
		console.log(six, five, four, three, two, one)
		counter == 10 ? alert("You've reached 10 seconds!") : false;
		counter++;
		root.render(<Home six = {six} five = {five} four = {four} three = {three} two = {two} one = {one}/>);
			
	}, 1000);


//create your first component
const Home = (props) => {
	function startTimer() {
		timerID = setInterval(function(){
			let six = Math.floor(counter/100000);
			let five = Math.floor(counter/10000);
			let four = Math.floor(counter/1000);
			let three = Math.floor(counter / 100);
			let two = Math.floor(counter / 10);
			let one = Math.floor(counter);
			console.log(six, five, four, three, two, one)
			counter == 10 ? alert("You've reached 10 seconds!") : false;
			counter++;
			root.render(<Home six = {six} five = {five} four = {four} three = {three} two = {two} one = {one}/>);
			
		}, 1000);
	}
	function stopTimer() {
			clearInterval(timerID);
	}
	function resetTimer(){
		counter = 0;
		startTimer();
	}
	return (
		<>
			
			<div className = " container-fluid bg-dark">
				<div className="d-flex justify-content-center" styles ={myStyles}>
					<Clock/>
					<Counter id = "counter1" time = {props.six % 10}/>
					<Counter id = "counter1" time = {props.five% 10}/>
					<Counter id = "counter1" time = {props.four % 10}/>
					<Counter id = "counter1" time = {props.three %10}/>
					<Counter id = "counter1" time = {props.two % 10}/>
					<Counter id = "counter1" time = {props.one % 10}/>
					
				</div>
				<div className="container text-center">
					<div className="row">
						<div className="col m-2">
							<button type="button" className="btn btn-primary" onClick={stopTimer}>Stop Timer</button>
						</div>
						<div className="col m-2">
							<button type="button" className="btn btn-primary" onClick={startTimer}>Resume Timer</button>
						</div>
						<div className="col m-2">
							<button type="button" className="btn btn-primary" onClick= {resetTimer}>Reset Timer</button>
						</div>
						
					</div>
				</div>
				<TimerController />
			</div>
		</>
	);
};



export default Home;
