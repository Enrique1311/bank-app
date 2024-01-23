import React from "react";

const DownloadBtn = ({ children }) => {
	return (
		<button
			type="button"
			className="rounded-lg border-2 border-primary hover:border-white"
		>
			{children}
		</button>
	);
};

export default DownloadBtn;
