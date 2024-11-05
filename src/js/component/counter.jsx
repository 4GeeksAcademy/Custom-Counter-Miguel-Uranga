import React from "react";

const myStyles = {
	width: "8%",
	display: "inline-block"

}

//create your first component
const Counter = (props) => {
	return (
		<>		
			<div className="m-2" styles = {myStyles} id = {props.id}>
				<div className="card bg-secondary text-light">
					<div className="card-body">
						<h5 className="card-title text-center fs-1">{props.time}</h5>
						<p className="card-text m-auto"></p>
					</div>
				</div>
			</div>	
		</>
	);
};

export default Counter;
