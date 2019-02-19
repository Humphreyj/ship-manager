import React from 'react';

const CrewMember = (props) => {
    return (
    	<div className="character">
			<div className="stats">
				<p className="name">{props.hero.name}</p>
				<p className="level"> {props.hero.level} </p>
				<p className="armor"> {props.hero.armor} </p>
				
			</div>
			
		</div>
        
    );
};



export default CrewMember;
