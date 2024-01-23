import React, { useState } from "react";
import { navLinks } from "../constants/index";
import logo from "../assets/logo.svg";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);

	return (
		<>
			<nav className="bg-primary w-full flex justify-between items-center py-[.9rem] px-[1.5rem] fixed z-50 top-0 sm:px-[3rem]">
				<a href="#">
					<img
						src={logo}
						alt="logo"
						className="w-[8rem]"
					/>
				</a>
				{/* Desktop menu */}
				<div className="text-white text-[1rem] w-full pl-12 hidden justify-end items-center gap-12 sm:flex">
					{navLinks.map((link, index) => (
						<a
							href={`#${link.id}`}
							key={link.id}
							className="hover:opacity-50"
						>
							{link.title}
						</a>
					))}
				</div>
				<div
					className="text-white text-[2rem] cursor-pointer sm:hidden"
					onClick={() => setToggleMenu((prev) => !prev)}
				>
					{toggleMenu ? <AiOutlineClose /> : <RiMenu3Fill />}
				</div>
			</nav>{" "}
			{/* Mobile menu	*/}
			<div
				className={`${
					toggleMenu ? "flex" : "hidden"
				} bg-black-gradient fixed text-white flex flex-col items-left min-w-[16rem] px-6 pt-32 h-full right-0 top-0 gap-16 text-[1.2rem] sidebar z-[45] sm:hidden`}
			>
				{navLinks.map((link, index) => (
					<a
						href={`#${link.id}`}
						key={link.id}
						onClick={() => setToggleMenu((prev) => !prev)}
					>
						{link.title}
					</a>
				))}
			</div>
		</>
	);
};

export default Navbar;
