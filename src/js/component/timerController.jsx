import React from "react";

const myStyles = {
	width: "70px",
	display: "inline-block"
}

//create your first component
const TimerController = () => {
	return (
		<>		
			<div class="container text-center">
                <div class="row">
                    <div class="col m-2">
                    Column
                    </div>
                    <div class="col m-2">
                    Column
                    </div>
                    <div class="col m-2">
                    Column
                    </div>
                </div>
            </div>
		</>
	);
};

export default TimerController;