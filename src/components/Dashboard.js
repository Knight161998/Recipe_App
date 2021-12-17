import Leftbar from './Leftbar';
import './Dashboard.css';
import RecipeList from './ReceipeList';

function Dashboard() {
	return (
		<>
			<div className="App">
				<div className="container">
					<div className="topbar">
						<h3>EASYMEALS</h3>
						<select name="categories" className="categories">
							<option value="" selected="categories">
								All CATEGORIES
							</option>
							<option value="" selected="categories">
								By Season
							</option>
							<option value="" selected="categories">
								By Dietary perference
							</option>
							<option value="" selected="categories">
								By Meal
							</option>
							<option value="" selected="categories">
								Sweet Things
							</option>
						</select>
						<div class="search-container">
							<input
								type="text"
								placeholder="Search recipes..."
								name="search"
							></input>
							<button type="submit">
								{/* <i class="fas fa-search fa-lg"></i> */}
								Search
							</button>
						</div>
					</div>
					<hr />
					<div className="downbar">
						<div class="topnav">
							<a href="#about">HOME</a>
							<a href="#about">CATEGORIES</a>
							<a href="#about">RECIPES</a>
							<a href="#about">CONTACT</a>
							<a href="#about">ABOUT</a>
						</div>
						{/* <iframe className="insta">
							<i class="fab fa-instagram"></i>
						</iframe> */}
					</div>
					<div className="left-recipe">
						<hr />
						<Leftbar />
						<RecipeList />
					</div>
				</div>
			</div>
		</>
	);
}

export default Dashboard;
