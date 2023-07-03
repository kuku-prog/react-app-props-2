import search from "../commonResource/images/icons/search-icon-sm.png";
import logo from "../commonResource/images/icons/logo-sm.png";
import cart from "../commonResource/images/icons/cart-sm.png";
import HeaderProps from "./HeaderProps";
import React, { Component } from "react";

export default class Header extends Component {
	render() {
		return (
			<div>
				<div className="nav-wrapper fixed-top">
					<div className="container">
						<nav className="navbar navbar-toggleable-sm navbar-expand-md">
							<button
								className="navbar-toggler navbar-toggler-right"
								type="button"
								data-toggle="collapse"
								data-target=".navbar-collapse"
							>
								☰
							</button>
							<a className="navbar-brand mx-auto" href="#">
								<img src={logo} />
							</a>

							<div className="navbar-collapse collapse">
								<ul className="navbar-nav nav-justified w-100 nav-fill">
									<HeaderProps name="Mac" linkurl="/mac/" />
									<HeaderProps name="iPhone" linkurl="/#/" />
									<HeaderProps name="iPad" linkurl="/#/" />
									<HeaderProps name="Watch" linkurl="/#/" />
									<HeaderProps name="tv" linkurl="/#/" />
									<HeaderProps name="Music" linkurl="/#/" />
									<HeaderProps name="Support" linkurl="/#/" />

									<li className="nav-item">
										<a className="nav-link js-scroll-trigger" href="/search/">
											<img src={search} />
										</a>
									</li>
									<li className="nav-item">
										<a className="nav-link js-scroll-trigger" href="/cart/">
											<img src={cart} />
										</a>
									</li>
								</ul>
							</div>
						</nav>
					</div>
				</div>
				<div>
					{/* Alert Section  */}
					<section className="alert-section top-50">
						<div class="container">
							<div class="alert-title">We’re open for you.</div>
							<div class="alert-text">
								Our retail stores are closed, but you can buy our products here
								online and get fast, free delivery. If you need help finding the
								right product or have a question on your order, chat online with
								a Specialist or call 1-800-MY-APPLE.
								<br />
								For service and support, visit{" "}
								<a href="https://support.apple.com/">support.apple.com</a>.
							</div>
						</div>
					</section>
				</div>
			</div>
		);
	}
}
