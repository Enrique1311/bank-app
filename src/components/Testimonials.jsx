import React from "react";
import { feedback } from "../constants";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => {
	return (
		<section
			id="clients"
			className="section-padding"
		>
			<div className="flex-1 flex flex-col items-center gap-[1rem] sm:flex-row sm:gap-[2rem]">
				<h3 className="h3-title w-full">What people are saying about us</h3>
				<p className="p-text w-full">
					Everything you need to accept card payments and grow your business
					anywhere on the planet.
				</p>
			</div>
			<div className="flex flex-wrap justify-center gap-[2rem] mt-[3rem]">
				{feedback.map((card) => (
					<FeedbackCard
						key={card.id}
						{...card}
					/>
				))}
			</div>
		</section>
	);
};

export default Testimonials;
