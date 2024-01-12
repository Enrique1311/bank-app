import React, { useState } from "react";
import { navLinks } from "../constants/index";
import logo from "../assets/logo.svg";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);

	const menuLinks = () => {};

	return (
		<>
			{" "}
			<nav className="bg-primary w-full flex justify-between items-center py-4 px-6 fixed z-10 sm:px-14">
				<a href="#">
					<img
						src={logo}
						alt="logo"
						className="w-[120px]"
					/>
				</a>
				<div className="text-white text-lg w-full px-12 hidden justify-end items-center gap-12 sm:flex">
					{navLinks.map((link, index) => (
						<a
							href={`#{link.id}`}
							key={link.id}
							className="hover:opacity-50"
						>
							{link.title}
						</a>
					))}
				</div>
				<div
					className="text-white text-3xl cursor-pointer sm:hidden"
					onClick={() => setToggleMenu((prev) => !prev)}
				>
					{toggleMenu ? <AiOutlineClose /> : <RiMenu3Fill />}
				</div>
			</nav>{" "}
			<div
				className={`${
					toggleMenu ? "flex" : "hidden"
				} bg-black-gradient text-white flex absolute flex-col items-left min-w-[280px] px-6 pt-32 h-full right-0 top-0 gap-16 text-xl sidebar z-5 sm:hidden`}
			>
				{navLinks.map((link, index) => (
					<a
						href={`#{link.id}`}
						key={link.id}
					>
						{link.title}
					</a>
				))}
			</div>
		</>
	);
};

export default Navbar;
