import React from "react";

const myStyles = {
	width: "70px",
	display: "inline-block"
}

//create your first component
const Clock = () => {
	return (
		<>		
			<div className="m-2" >
				<div className="card bg-secondary text-light" styles = {myStyles}>
					<div className="card-body">
						<h5 className="card-title text-center"></h5>
						<p className="card-text m-auto fs-1">🕜</p>
					</div>
				</div>
			</div>	
		</>
	);
};

export default Clock;
