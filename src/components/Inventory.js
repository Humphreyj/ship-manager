import React, { Component } from 'react';
import InventoryItem from './InventoryItem'
import axios from '.././axios-orders'

export class Inventory extends Component {
	constructor() {
		super()

		this.itemDown = this.itemDown.bind(this)
		this.itemUp = this.itemUp.bind(this)
		this.updateInventory = this.itemUp.bind(this)

		



		this.state= {
		inventory: [ 
    {
      id: 1,
      name: 'Bananas: ',
      count: 20,
    },
    {
      id: 2,
      name: 'Cannonballs: ',
      count: 53,
    },
    {
      id: 3,
      name: 'Planks: ',
      count: 42,
    },
    {
    	id: 4,
    	name: 'Powder Kegs: ',
    	count: 0
    }
    ]//inventory array ends
}
	}

itemDown (id) {
	this.setState(prevState => {
		const updatedInventory = prevState.inventory.map(
			item=> {
				if(item.id === id) {
					item.count -=1
				}
				return item
			})
		return {
			inventory : updatedInventory
		}
	})
}

itemUp(id) {
	this.setState(prevState => {
		const updatedInventory = prevState.inventory.map(
			item=> {
				if(item.id === id) {
					item.count +=1
				}
				return item
			})
		return {
			inventory : updatedInventory
		}
	})
}





	render() {
		const inventoryItems = this.state.inventory.map(item => <InventoryItem itemDown={this.itemDown} itemUp={this.itemUp} inventory={this.state.inventory} key={item.id} item={item}/>)
		return (
			<div className='inventory'>
				
				{inventoryItems}
				

			</div>
		);
	}
}

export default Inventory