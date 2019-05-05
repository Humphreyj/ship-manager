import React from 'react';

const InventoryItem = (props) => {
    return (
    	<div className="inventory-item">
			<button className='plus' onClick= {()=> props.itemUp(props.item.id)}>+</button>
			<p className="bananas">{props.item.name}{props.item.count}</p>
			<button className='minus' onClick= {()=> props.itemDown(props.item.id)}>-</button>
		</div>
        
    );
};



export default InventoryItem;
