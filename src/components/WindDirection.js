import React from 'react';

const WindDirection = (props) => {
	let windDirection;
	
	function getDirection() {
		let num; 
		num = Math.floor(Math.random() * 8)
		console.log(num)
		if(num ===1) {
			windDirection='North'
		}else if(num === 2 ) {
			windDirection = 'North'
		}

	}
    return (
    	<div className='wind-direction'>
				<h4>Wind Direction</h4>
				<p className="direction">{windDirection}</p>
				<button 
				className="change-direction"
				onClick={getDirection()}
				>Change</button>
			</div>
        
    );
};


export default WindDirection;
