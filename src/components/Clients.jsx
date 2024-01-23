import React from "react";
import { clients } from "../constants";

const Clients = () => {
	return (
		<section className="section-padding flex flex-wrap justify-center items-center gap-[2rem] sm:gap-[4rem]">
			{clients.map((client) => (
				<div key={client.id}>
					<img
						src={client.logo}
						alt="client"
						className="w-[6rem] sm:w-[8rem]"
					/>
				</div>
			))}
		</section>
	);
};

export default Clients;
