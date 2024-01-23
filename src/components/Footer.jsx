import React from "react";
import logo from "../assets/logo.svg";
import { footerLinks } from "../constants";
import SocialMedia from "./SocialMedia";

const Footer = () => {
	return (
		<footer className="section-padding">
			<div className="flex justify-around items-center gap-[3rem] flex-wrap mb-[4rem]">
				<div>
					<img
						src={logo}
						alt="logo"
						className="w-[12rem]"
					/>
					<p className="p-text mt-[1rem] w-[14rem]">
						A new way to make the payments easy, reliable and secure.
					</p>
				</div>{" "}
				<div className="flex justify-between gap-[2.5rem] flex-wrap">
					{footerLinks.map((footerLink) => (
						<div className="flex flex-col items-start gap-[1rem]">
							<h4 className="text-white font-semibold">{footerLink.title}</h4>
							<div className="flex flex-col gap-[.6rem]">
								{footerLink.links.map((link) => (
									<a
										key={link.name}
										href=""
										className="p-text hover:text-secondary"
									>
										{link.name}
									</a>
								))}
							</div>
						</div>
					))}
				</div>
			</div>{" "}
			<div className="w-full flex flex-col justify-center items-center flex-wrap py-[1.4rem] border-t-[1px] border-gray-800 sm:flex-row sm:justify-between">
				<p className="p-text">Copyright Ⓒ 2024 HooBank. All Rights Reserved.</p>{" "}
				<div className="mt-[1rem] sm:mt-0">
					{" "}
					<SocialMedia />
				</div>
			</div>
		</footer>
	);
};

export default Footer;
