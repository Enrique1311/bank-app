import React from "react";
import discountImg from "../assets/Discount.svg";
import robotImg from "../assets/robot.png";
import CircleBtn from "./CircleBtn";

const Header = () => {
	return (
		<section
			id="home"
			className="two-halves pt-[3rem]"
		>
			<div className="flex flex-col gap-[2rem] w-full px-[1rem] xs:px-[2rem] sm:pl-[4rem] sm:w-3/5 md:pl-[6rem] md:pr-0 md:gap-[3rem]">
				<div className="flex items-center bg-discount-gradient rounded-md">
					<img
						src={discountImg}
						alt="discount"
						className=""
					/>
					<p className="text-[.8rem] ml-3 text-white">
						<span className="font-bold">20%</span> DISCOUNT FOR{" "}
						<span className="font-bold">1 MONTH</span> ACCOUNT
					</p>
				</div>
				<div className="flex justify-between flex-wrap w-full">
					<div className="w-full flex justify-between flex-wrap">
						<h1 className="flex-1 text-white font-semibold text-[2rem] leading-[2.5rem] xs:text-[2.5rem] xs:leading-[3.5rem] md:text-[3rem] md:leading-[4rem] lg:text-[3.5rem] lg:leading-[4.5rem]">
							The Next
							<br />
							<span className="text-gradient">Generation</span>
							<br />
						</h1>
						<CircleBtn />
					</div>
					<h1 className="flex-1 text-white font-semibold text-[2rem] leading-[2.5rem] xs:text-[2.5rem] xs:leading-[3.5rem] md:text-[3rem] md:leading-[4rem] lg:text-[3.5rem] lg:leading-[4.5rem]">
						Payment Method.
					</h1>
				</div>
				<p className="p-text">
					Our team of experts uses a methodology to identify the credit cards
					most likely to fit your needs. We examine annual percentage rates,
					annual fees.
				</p>
			</div>
			<div className="flex-1 flex justify-center items-center my-0 w-full sm:w-2/5 relative">
				<img
					src={robotImg}
					alt="robot"
					className="w-full h-full z-[30] relative"
				/>
				<div className="absolute z-0 w-[40%] h-[35%] top-0 pink__gradient"></div>
				<div className="absolute z-10 w-[80%] h-[80%] bottom-40 rounded-40 white__gradient"></div>
				<div className="absolute z-0 w-[50%] h-[50%] bottom-20 blue__gradient"></div>
			</div>
		</section>
	);
};

export default Header;
