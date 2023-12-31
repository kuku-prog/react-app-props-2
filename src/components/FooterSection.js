import React, { Component } from "react";
import FooterProps from "./FooterProps";
import flag from "../commonResource/images/icons/16.png";

export default class FooterSection extends Component {
	render() {
		const shop = [
			{ title: "Mac", href: "#" },
			{ title: "iPad", href: "#" },
			{ title: "iPhone", href: "#" },
			{ title: "Watch", href: "#" },
			{ title: "TV", href: "#" },
			{ title: "Music", href: "#" },
			{ title: "AirPods", href: "#" },
			{ title: "HomePod", href: "#" },
			{ title: "iPod Touch", href: "#" },
			{ title: "Accessories", href: "#" },
			{ title: "Gift Card", href: "#" },
		];

		const services = [
			{ title: "Apple Music", links: "#" },
			{ title: "Apple News+", links: "#" },
			{ title: "Apple TV+", links: "#" },
			{ title: "Apple Arcade", links: "#" },
			{ title: "Apple Card", links: "#" },
			{ title: "iCloud", links: "#" },
		];
		const store = [
			{ title: "Find a Store", href: "#" },
			{ title: "Genius Bar", href: "#" },
			{ title: "Today at Apple", href: "#" },
			{ title: "Apple Camp", href: "#" },
			{ title: "Field Trip", href: "#" },
			{ title: "Apple Store App", href: "#" },
			{ title: "Refurbished and Clearance", href: "#" },
			{ title: "Financing", href: "#" },
			{ title: "Apple Trade In", href: "#" },
			{ title: "Order Status", href: "#" },
			{ title: "Shopping Help", href: "#" },
		];
		const storeLinks = [
			{ title: "Find a Store", href: "#" },
			{ title: "Genius Bar", href: "#" },
			{ title: "Today at Apple", href: "#" },
			{ title: "Apple Camp", href: "#" },
			{ title: "Field Trip", href: "#" },
			{ title: "Apple Store App", href: "#" },
		];

		const about = [
			{ title: "Find a Store", href: "#" },
			{ title: "Genius Bar", href: "#" },
			{ title: "Today at Apple", href: "#" },
			{ title: "Apple Camp", href: "#" },
			{ title: "Field Trip", href: "#" },
			{ title: "Apple Store App", href: "#" },
		];

		const government = [
			{ title: "Apple and Education", href: "#" },
			{ title: "Shop for College", href: "#" },
		];

		const accountLinks = [
			{ title: "Manage Your Apple ID", href: "#" },
			{ title: "Apple Store Account", href: "#" },
			{ title: "iCloud.com", href: "#" },
		];

		const value = [
			{ title: "Find a Store", href: "#" },
			{ title: "Genius Bar", href: "#" },
			{ title: "Today at Apple", href: "#" },
			{ title: "Apple Camp", href: "#" },
			{ title: "Field Trip", href: "#" },
			{ title: "Apple Store App", href: "#" },
		];

		const health = [
			{ title: "Manage Your Apple ID", href: "#" },
			{ title: "Apple Store Account", href: "#" },
			{ title: "iCloud.com", href: "#" },
		];

		const education = [
			{ title: "Apple and Education", href: "#" },
			{ title: "Shop for College", href: "#" },
		];

		const business = [
			{ title: "Apple and Business", href: "#" },
			{ title: "Shop for Business", href: "#" },
		];

		const links = [
			{ title: "Privacy Policy", href: "#" },
			{ title: "Terms of Use", href: "#" },
			{ title: "Sales and Refunds", href: "#" },
			{ title: "Legal", href: "#" },
			{ title: "Site Map", href: "#" },
		];

		return (
			<footer className="footer-wrapper">
				<div className="container">
					<div className="upper-text-container">
						<p>
							1. Trade In: Trade‑in values vary. iPhone 11 and iPhone 11 Pro
							promotional pricing is after trade‑in of iPhone 8 Plus and iPhone
							X in good condition. Additional trade‑in values require purchase
							of a new iPhone, subject to availability and limits. Must be at
							least 18. Apple or its trade-in partners reserve the right to
							refuse or limit any Trade In transaction for any reason. In‑store
							trade‑in requires presentation of a valid, government-issued photo
							ID (local law may require saving this information). Sales tax may
							be assessed on full value of new iPhone. Additional terms from
							Apple or Apple’s trade-in partners may apply. Monthly pricing:
							Available to qualified customers and requires 0% APR, 24-month
							installment loan with Citizens One or Apple Card Monthly
							Installments and iPhone activation with AT&T, Sprint, T-Mobile, or
							Verizon. Taxes and shipping not included. Additional Apple Card
							Monthly Installments terms are in the{" "}
							<a
								href="https://www.goldmansachs.com/terms-and-conditions/Apple-Card-Customer-Agreement.pdf"
								target="_blank"
							>
								{" "}
								Customer Agreement
							</a>
							. Additional iPhone Payments terms are{" "}
							<a href="https://www.apple.com/legal/sales-support/iphoneinstallments_us/">
								{" "}
								here
							</a>
							.
						</p>
						<p>
							2. Subscription required.
							<br />
							<br />
							Magic Keyboard sold separately.
							<br />
							<br />
							Apple TV+ is $4.99/month after free trial. One subscription per
							Family Sharing group. Offer good for 3 months after eligible
							device activation. Plan automatically renews until cancelled.
							Restrictions and other{" "}
							<a href="https://www.apple.com/promo/">terms </a> apply.
						</p>
					</div>
					<div className="footer-links-wrapper row">
						<div className="links-wrapper-1 col-sm-12 col-md">
							<h3>Shop and Learn</h3>
							<ul>
								<FooterProps links={services} />
							</ul>
						</div>
						<div className="links-wrapper-2 col-sm-12 col-md">
							<h3>Services</h3>
							<ul>
								<FooterProps links={services} />
							</ul>
							<h3>Account</h3>
							<ul>
								<FooterProps links={accountLinks} />
							</ul>
						</div>
						<div className="links-wrapper-3 col-sm-12 col-md">
							<h3>Apple Store</h3>
							<ul>
								<FooterProps links={store} />
							</ul>
						</div>
						<div className="links-wrapper-4 col-sm-12 col-md">
							<h3>For Business</h3>
							<ul>
								<FooterProps links={business} />
							</ul>
							<h3>For Education</h3>
							<ul>
								<FooterProps links={education} />
							</ul>
							<h3>For Healthcare</h3>
							<ul>
								<FooterProps links={health} />
							</ul>
							<h3>For Government</h3>
							<ul>
								<FooterProps links={government} />
							</ul>
						</div>
						<div className="links-wrapper-5 col-sm-12 col-md">
							<h3>Apple Values</h3>
							<ul>
								<FooterProps links={value} />
							</ul>
							<h3>About Apple</h3>
							<ul>
								<FooterProps links={about} />
							</ul>
						</div>
					</div>
					<div className="my-apple-wrapper">
						More ways to shop: <a href="#">Find an Apple Store</a> or{" "}
						<a href="#">other retailer</a> near you. Or call 1-800-MY-APPLE.
					</div>
					<div className="copyright-wrapper row">
						<div className="copyright col-sm-12 order-2 col-md-8 order-md-1 col-lg-4 order-lg-1">
							Copyright &copy; 2020 Apple Inc. All rights reserved.
						</div>
						<div className="footer-links-terms  col-sm-12 order-3 col-lg-6 order-lg-2">
							<ul></ul>
						</div>
						<div className="footer-country  col-sm-12 order-1 col-md-4 order-md-2 text-md-right col-lg-2 order-lg-3">
							<div className="flag-wrapper">
								<img src={flag} />
							</div>{" "}
							<div className="footer-country-name">United States</div>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}
