import React from "react";
import MainBtn from "./MainBtn";
import cardImage from "../assets/card.png";

const CardDeal = () => {
	return (
		<section className="section-padding two-halves">
			<div className="half-container">
				<h3 className="h3-title">Find a better card deal in few easy steps.</h3>
				<p className="p-text">
					Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
					aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
				</p>
				<div>
					<MainBtn />
				</div>
			</div>
			<div className="sm:w-1/2">
				<img
					src={cardImage}
					alt="image"
				/>
			</div>
		</section>
	);
};

export default CardDeal;
