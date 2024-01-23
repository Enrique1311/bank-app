import React from "react";
import MainBtn from "./MainBtn";

const CTA = () => {
	return (
		<section className="section-padding">
			<div className="two-halves rounded-xl bg-black-gradient py-[2rem] px-[3rem] sm:py-[2.5rem] sm:px-[4.5rem] lg:py-[3rem] lg:px-[5rem]">
				<div className="w-full sm:w-3/5">
					{" "}
					<h3 className="h3-title">Let’s try our service now!</h3>
					<p className="p-text mt-[1rem]">
						Everything you need to accept card payments and grow your business
						anywhere on the planet.
					</p>
				</div>{" "}
				<div className="w-full sm:text-right sm:w-2/5">
					{" "}
					<MainBtn />
				</div>
			</div>
		</section>
	);
};

export default CTA;
