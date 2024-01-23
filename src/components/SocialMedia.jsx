import React from "react";
import { socialMedia } from "../constants";

const SocialMedia = () => {
	return (
		<div className="flex justify-center items-center gap-[1.2rem]">
			{socialMedia.map((social) => (
				<a
					href={social.link}
					key={social.id}
				>
					{" "}
					<img
						src={social.icon}
						alt="icon"
						className="w-[1.5rem] hover:scale-125 transition-all"
					/>
				</a>
			))}
		</div>
	);
};

export default SocialMedia;
