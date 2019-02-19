import React, { Component } from 'react';
import CrewMember from './CrewMember'

export class Crew extends Component {
	constructor() {
    super()

    this.state={
      heroes: [
    
    {
      id: 1,
      name: 'Andre Ox Melon',
      level: 12,
      armor: 16,
      health: 73,
      editing: false
    },
    {
      id: 2,
      name: 'Bartholomew Breechless',
      level: 12,
      armor: 18,
      health: 73,
      editing: false
    },
    {
      id: 3,
      name: 'Foamtod Boxshorts',
      level: 12,
      armor: 18,
      health: 73,
      editing: false
    },
    {
      id: 4,
      name: 'Milpool',
      level: 12,
      armor: 18,
      health: 73,
      editing: false
    },
    
    {
      id: 5,
      name: 'Toomes',
      level: 12,
      armor: 18,
      health: 73,
      editing: false
    },
    {
      id: 6,
      name: 'Unknown',
      level: '??',
      armor: '??',
      health: '??',
      editing: false
    },
    ]
    }//state ends
  }//contructor ends
	render() {
		const crew = this.state.heroes.map(hero => <CrewMember heroes={this.state.heroes} hero={hero} key={hero.id}/>)
		return (
			<div className='crew'>{crew}</div>
		);
	}
}

export default Crew
