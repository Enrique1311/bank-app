import React from "react";
import MainBtn from "./MainBtn";
import FeatureCard from "./FeatureCard";
import { features } from "../constants/index.js";

const Business = () => {
	return (
		<section
			className="section-padding two-halves"
			id="features"
		>
			<div className="half-container">
				<h3 className="h3-title">
					You do the business, we’ll handle the money.
				</h3>
				<p className="p-text">
					With the right credit card, you can improve your financial life by
					building credit, earning rewards and saving money. But with hundreds
					of credit cards on the market.
				</p>
				<div>
					{" "}
					<MainBtn />
				</div>
			</div>
			<div className="w-full flex flex-col gap-[1.2rem] sm:w-1/2">
				{features.map((feature) => (
					<FeatureCard
						key={feature.id}
						icon={feature.icon}
						title={feature.title}
						content={feature.content}
					/>
				))}
			</div>
		</section>
	);
};

export default Business;
