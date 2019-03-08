import React, { Component } from 'react';

export class ShipStats extends Component {

	constructor() {
		super()

		this.state = {
			shipHP: 700,
			hpChange: ''
			
		}
		this.getChange = this.getChange.bind(this)
		this.shipHpDown = this.shipHpDown.bind(this)
		this.shipHpUp = this.shipHpUp.bind(this)
	}

	shipHpDown() {
		this.setState(prevState => {
			return {
				shipHP: prevState.shipHP - this.state.hpChange,
				hpChange: ''
			}
		})
	}
	shipHpUp() {
		this.setState(prevState => {
			let hpIncrease = prevState.shipHP + eval(this.state.hpChange)
			return {
				shipHP: hpIncrease ,
				hpChange: ''
			}
		})
	}

	getChange(event) {
		this.setState({
      hpChange: event.target.value
    });//get change function
		console.log(this.state.hpChange)
	}

	render() {
		return (
			<div className="ship-info">
				<div className='ship-health'>
					<p className="ship-hp">{this.state.shipHP}</p>
					<div className="ship-health-interface">
						<button 
						className="interface-button ship-hp-minus"
						onClick={this.shipHpDown}
						>-</button>
						<input className='ship-hp-change'
						 type='number'
						 name='shipHpChange'
						 value={this.state.hpChange}
						 onChange={event => this.getChange(event)} 
						 />
						<button 
						className="interface-button ship-hp-plus"
						onClick={this.shipHpUp}
						>+</button>
					</div>
			</div>
			<div className='ship-stats'>
					<p className="ship-ac">16/20</p>
					<p className="ship-speed">130-200</p>
			</div>
			</div>
			
		);
	}
}

export default ShipStats
