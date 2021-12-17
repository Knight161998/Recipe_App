// import { recipes } from './recipes';
import recipe from './recipe';
import './key';
import Axios from 'axios';
import { useState } from 'react';

function RecipeList() {
	const [data, setData] = useState('');
	const [recipe, setRecipe] = [];

	var url = `https://api.edamam.com/doc/open-api/recipe-search-v2.json`;

	async function getRecipe() {
		var result = await Axios.get(url);
		setRecipe(result.data.hits);
		console.log(result.data);
	}

	const onSubmit = (e) => {
		e.preventDefault();
		getRecipe();
	};

	// fetch()

	// console.log(recipes);
	return (
		<div className="recipeList">
			{recipe.map((recipe) => {
				return <recipe recipe={recipe} />;
			})}
		</div>
	);
}

export default RecipeList;
