import React from "react";
import apple from "../assets/apple.svg";
import bill from "../assets/bill.png";
import google from "../assets/google.svg";
import DownloadBtn from "./DownloadBtn";

const Billing = () => {
	return (
		<section
			className="section-padding two-halves-reverse"
			id="product"
		>
			<div className="sm:w-1/2">
				<img src={bill}></img>
			</div>
			<div className="half-container">
				<h3 className="h3-title">Easily control your billing & invoicing.</h3>
				<p className="p-text">
					Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
					aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
					placerat.
				</p>
				<div className="flex gap-[2rem]">
					<DownloadBtn>
						{" "}
						<img
							src={apple}
							alt=""
						/>
					</DownloadBtn>
					<DownloadBtn>
						{" "}
						<img
							src={google}
							alt=""
						/>
					</DownloadBtn>
				</div>
			</div>
		</section>
	);
};

export default Billing;
