import React from "react";
import Counter from "./counter.jsx"
import Clock from "./clock.jsx"
import TimerController from "./timerController.jsx";


const myStyles = {
	width: "70%",
	height: "75vh"
}


//create your first component
const Home = (props) => {
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
				<TimerController />
			</div>
		</>
	);
};

export default Home;
