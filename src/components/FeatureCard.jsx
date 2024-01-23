import React from "react";

const FeatureCard = ({ icon, title, content }) => {
	return (
		<div className="flex justify-left items-center py-[.6rem] px-[.8rem] border-2 border-gray-800 rounded-lg cursor-pointer feature-card gap-[.8rem]">
			<img
				src={icon}
				alt="icon"
				className="w-[2.7rem] h-[2.7rem] rounded-full bg-dimBlue p-[.6rem]"
			/>

			<div>
				<h4 className="text-bold font-semibold text-white mb-[.2rem]">
					{title}
				</h4>
				<p className="p-text">{content}</p>
			</div>
		</div>
	);
};

export default FeatureCard;
