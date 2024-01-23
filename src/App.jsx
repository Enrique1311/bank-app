import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Stats from "./components/Stats";
import Business from "./components/Business";
import Billing from "./components/Billing";
import CardDeal from "./components/CardDeal";
import Testimonials from "./components/Testimonials";
import Clients from "./components/Clients";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="bg-primary">
			<Navbar />
			<div className="mt-14">
				<Header />
				<Stats />
				<Business />
				<Billing />
				<CardDeal />
				<Testimonials />
				<Clients />
				<CTA />
				<Footer />
			</div>
		</div>
	);
}

export default App;
