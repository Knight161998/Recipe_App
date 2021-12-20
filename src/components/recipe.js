import React from 'react';

export default function recipe(recipes) {
	return (
		<div className="recipeTile">
			<img src={recipes['recipes']['image']} />
			<p>{recipes['recipes']['label']}</p>
		</div>
	);
}
