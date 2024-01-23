import React from "react";
import quotesImg from "../assets/quotes.svg";

const FeedbackCard = ({ content, name, title, img }) => {
	return (
		<div className="flex flex-col gap-[1.5rem] max-w-[18rem] p-[2rem] border-2 border-gray-800 rounded-xl feature-card">
			<img
				src={quotesImg}
				alt="quotes"
				className="w-[2rem] h-[1.5rem] object-contain"
			/>
			<p className="text-white text-[.9rem]">{content}</p>
			<div className="flex gap-[1rem]">
				<img
					src={img}
					alt="photo"
					className="w-[3rem] h-[3rem] object-contain"
				/>
				<div>
					<h4 className="text-white text-[1rem]">{name}</h4>
					<p className="p-text">{title}</p>
				</div>
			</div>
		</div>
	);
};

export default FeedbackCard;
