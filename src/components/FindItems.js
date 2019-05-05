import React, { Component } from 'react';
import FoundItem from './FoundItem'

class FindItems extends Component {

  constructor(props) {
    super(props)

    

    this.state = {
  inventory: [ 
    {
      id: 1,
      name: 'Bananas: ',
      amount: 0,
    },
    {
      id: 2,
      name: 'Cannonballs: ',
      amount: 0,
    },
    {
      id: 3,
      name: 'Planks: ',
      amount: 1,
    }
    
    ]//inventory array ends
};
this.getSupply = this.getSupply.bind(this)

 

  }
	

getSupply = (num, id) => {
  let result2;

  result2 =(Math.floor(Math.random() * num + 1));
  this.setState(this.state.inventory.map(item => {
        if(item.id === id) {
          item.amount = result2
        }
        return item
      }))

 
  console.log(result2);
  //this function determines how many supplies are found
}


rollDice = () => {
  //this function determines if supplies are found.
  let result;
  
   result = (Math.floor(Math.random() * 20 + 1));
   if(result >= 10 && result < 18) {
    this.getSupply(6);
    console.log(result +' You Find some supplies')
   }else if (result >= 18) {
    this.getSupply(12)

    console.log(result + ' You find even more supplies')
   }else {
    console.log(result + ' There is naught here.')
   }
   
}



render() {




const foundItems = this.state.inventory.map(item => <FoundItem inventory={this.state.inventory} key={item.id} item={item}/>)

	return (

		

		<div className="find-items">

		{foundItems}
		
		<div className="find-buttons">
			<button className="find-supplies" onClick={this.rollDice}>Find Supplies!</button>
		</div>
		
		

    </div>
	);
}
}

export default FindItems
