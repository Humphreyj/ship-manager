import React from 'react';

const Weaponry = (props) => {
    return (
    	<div className="weaponry">
					<div className="weapon">
						<div className="weapon-name">
							<p className="cannon cannon1">Common Cannon (4)</p>
							<p className="weapon-type">Heavy Weapon</p>
						</div>
						<div className="weapon-stats">
							<p className="range">300ft/600ft</p>
							<p className="to-hit">+ Dex</p>
							<p className="damage">4d20 to ships and 5d6 to players within 10ft.</p>
						</div>
					</div>
					</div>
        
    );
};



export default Weaponry;
