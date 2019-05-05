import React from 'react';

const FoundItem = (props) => {
    return (
    	<div className="found-item">
			
			<p className="supplies">{props.item.name}{props.item.amount}</p>
			
		</div>
        
    );
};



export default FoundItem;