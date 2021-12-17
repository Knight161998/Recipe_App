import React from 'react';
import './index.css';

function recipe({ recipe }) {
	return (
		<div className="recipeTile">
			<img src={recipe['recipe']['image']} />
			<p>{recipe['recipe']['name']}</p>
		</div>
	);
}
export default recipe;
