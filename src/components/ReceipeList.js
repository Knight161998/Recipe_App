import recipe from './recipe';
import axios from 'axios';
import { useState, useEffect } from 'react';

function RecipeList() {
	const [recipe, setRecipe] = useState([]);

	const YOUR_APP_ID = '98ae43c9';
	const YOUR_APP_KEY = '5dadbe216d63560310fe00f37bd98dec';

	var url = `https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&&health=alcohol-free`;

	async function getRecipes() {
		var result = await axios.get(url);
		setRecipe(result.data.hits);
		console.log(result.data);
	}

	useEffect(() => {
		getRecipes();
	}, '');

	return (
		// <div>
		// 	<form onSubmit={onSubmit}>
		// 		<input
		// 			type="text"
		// 			placeholder="enter recipe"
		// 			value={query}
		// 			onchnage={(e) => setQuery(e.target.value)}
		// 		/>
		// 		<input type="submit" value="Search" />
		// 	</form>
		<div className="recipeList">
			{recipe.map((recipes) => {
				return <recipe recipes={recipes} />;
			})}
		</div>
		/* </div> */
	);
}

export default RecipeList;
