import React from "react";

const MapCard = ({ country }) => {
	const { name, region, population, capital } = country;
	const flagImg = country.flags.png;
	return (
		<section className="map-card">
			<section className="card-img">
				<img src={flagImg} alt={`Flag of the country, ${name}`} />
			</section>
			<section className="card-info">
				<h3>{name}</h3>
				<section className="details">
					<p>
						<span>Population:</span> {population}
					</p>
					<p>
						<span>Region:</span> {region}
					</p>
					<p>
						<span>Capital:</span> {capital}
					</p>
				</section>
			</section>
		</section>
	);
};

export default MapCard;
