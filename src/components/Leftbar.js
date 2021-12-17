function Leftbar() {
	return (
		<>
			<div className="leftbar">
				<div className="filterRecipes">
					<h2>Filter Recipes: </h2>
					<h6>Check multiple boxes below to narrow recipe search results:</h6>
				</div>
				<div className="byseason">
					By Season: <br></br>
					<input type="checkbox" id="Autumn" name="Autumn" value="Autumn" />
					<label>Autumn</label> <br></br>
					<input type="checkbox" id="Spring" name="Spring" value="Spring" />
					<label>Spring</label> <br></br>
					<input type="checkbox" id="Summer" name="Summer" value="Summer" />
					<label>Summer</label> <br></br>
					<input type="checkbox" id="Winter" name="Winter" value="Winter" />
					<label>Winter</label> <br></br>
				</div>
				<div className="bydietarypreference">
					By Dietary preference: <br></br>
					<input
						type="checkbox"
						id="dairyfree"
						name="dairyfree"
						value="dairyfree"
					/>
					<label>Dairy Free</label> <br></br>
					<input type="checkbox" id="eggfree" name="eggfree" value="eggfree" />
					<label>Egg Free</label> <br></br>
					<input
						type="checkbox"
						id="glutenfree"
						name="glutenfree"
						value="glutenfree"
					/>
					<label>Gluten Free</label> <br></br>
					<input type="checkbox" id="healthy" name="healthy" value="healthy" />
					<label>Healthy</label> <br></br>
					<input
						type="checkbox"
						id="quickandeasy"
						name="quickandeasy"
						value="quickandeasy"
					/>
					<label>Quick And Easy</label> <br></br>
				</div>
				<div className="bymeal">
					By Meal: <br></br>
					<input
						type="checkbox"
						id="breakfast"
						name="breakfast"
						value="breakfast"
					/>
					<label>Breakfast</label> <br></br>
					<input type="checkbox" id="dessert" name="dessert" value="dessert" />
					<label>Dessert</label> <br></br>
					<input type="checkbox" id="dinner" name="dinner" value="dinner" />
					<label>Dinner</label> <br></br>
					<input
						type="checkbox"
						id="holidays"
						name="holidays"
						value="holidays"
					/>
					<label>Holidays</label> <br></br>
					<input
						type="checkbox"
						id="snacksandappetizers"
						name="snacksandappetizers"
						value="snacksandappetizers"
					/>
					<label>Snacks And Appetizers</label> <br></br>
				</div>
				<div className="sweetthings">
					Sweet Things: <br></br>
					<input
						type="checkbox"
						id="fruitdessert"
						name="fruitdessert"
						value="fruitdessert"
					/>
					<label>Fruit Dessert</label> <br></br>
					<input
						type="checkbox"
						id="chocolate"
						name="chocolate"
						value="chocolate"
					/>
					<label>Chocolate</label> <br></br>
					<input
						type="checkbox"
						id="cakesandquickbreads"
						name="cakesandquickbreads"
						value="cakesandquickbreads"
					/>
					<label>Cakes And Quick Breads</label> <br></br>
					<input
						type="checkbox"
						id="cookiesandbars"
						name="cookiesandbars"
						value="cookiesandbars"
					/>
					<label>Cookies And Bars</label> <br></br>
					<input
						type="checkbox"
						id="piesandtarts"
						name="piesandtarts"
						value="piesandtarts"
					/>
					<label>Pies And Tarts</label> <br></br>
					<input
						type="checkbox"
						id="icecreamandposicles"
						name="icecreamandposicles"
						value="icecreamandposicles"
					/>
					<label>Ice Cream And Posicles</label> <br></br>
				</div>
				<br></br>
				<div class="searchrecipetitles">
					<label>Search Recipe Titles: </label>
					<br></br>
					<input
						type="text"
						placeholder="Enter Keyword..."
						name="search"
					></input>
					<button type="submit">
						{/* <i class="fas fa-search fa-lg"></i> */}
						Search
					</button>
				</div>
			</div>
		</>
	);
}

export default Leftbar;
