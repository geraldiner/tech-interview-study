import { useState, useEffect } from "react";
import axios from "axios";

import MapCard from "./components/MapCard";

function App() {
	const [countries, setCountries] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const url = "https://restcountries.com/v2/all";
			const data = await axios.get(url);
			setCountries(data.data);
		};
		fetchData();
	}, []);

	return (
		<div className="app">
			<header className="header">
				<h1>Where in the world?</h1>
				<button id="theme-toggle" className="button" type="button">
					Dark Mode
				</button>
			</header>
			<section className="form">
				<form>
					<input type="search" placeholder="Search for a country..." />
					<select>
						<option>Filter by Region</option>
						<option>Africa</option>
						<option>Americas</option>
						<option>Asia</option>
						<option>Europe</option>
						<option>Oceania</option>
					</select>
				</form>
			</section>
			<section id="countries-list">
				{countries &&
					countries.map((c, i) => {
						return <MapCard key={i} country={c} />;
					})}
			</section>
		</div>
	);
}

export default App;
