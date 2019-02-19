import React, { Component } from 'react';
import Inventory from './Inventory'
import Weaponry from './Weaponry'
import ShipStats from './ShipStats'
import WindDirection from './WindDirection'


export class TheOar extends Component {
    render() {
        return (
        	<div className="wrapper">
        		<div className='the-oar'>
				<h1 className='ship-name'>Ship Manager</h1>
				<h3>Ship Stats</h3>
				<br/>
				<ShipStats />
				<WindDirection/>
				
				<h3>Weaponry</h3>
				<Weaponry />
				 
				<h3>Inventory</h3>
				<Inventory />

			</div> 
    	</div>
            
        );
    }
}

export default TheOar