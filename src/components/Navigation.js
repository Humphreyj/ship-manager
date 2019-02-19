import React, { PropTypes } from 'react';
import { NavLink } from 'react-router-dom'
const Navigation = (props) => {
    return (
		
		<div className="navigation">
			<NavLink to='/'>Ship</NavLink>
			<NavLink to='/crew'>Crew</NavLink>
		</div>
        
    );
};



export default Navigation;
