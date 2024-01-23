import React from "react";
import { stats } from "../constants";

const Stats = () => {
	return (
		<section className="section-padding flex-1 flex flex-wrap justify-center">
			{stats.map((stat) => (
				<div
					key={stat.id}
					className="flex justify-center items-center px-8 py-1 gap-2"
				>
					<h3 className="font-bold text-white text-[1.4rem]">{stat.value}</h3>
					<p className="text-[.9rem] uppercase text-gradient">{stat.title}</p>
				</div>
			))}
		</section>
	);
};

export default Stats;
