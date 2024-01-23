import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const CircleBtn = () => {
	return (
		<div className="w-[5rem] h-[5rem] p-[2px] bg-blue-gradient rounded-full hover:scale-110 transition-all sm:w-[5.5rem] sm:h-[5.5rem] md:w-[6rem] md:h-[6rem] lg:w-[7rem] lg:h-[7rem]">
			<button
				type="button"
				className="w-full h-full flex justify-center items-center bg-primary rounded-full cursor-pointer"
			>
				<div className="text-gradient text-[.9rem] sm:text-[.9rem]">
					<div className="flex">
						{" "}
						<span>Get</span>
						<FiArrowUpRight className="w-[1rem] h-[1rem] ml-[.4rem] text-white object-contain" />
						<br />
					</div>
					<span>Started</span>
				</div>
			</button>
		</div>
	);
};

export default CircleBtn;
