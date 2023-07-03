import React, { Component } from "react";
import LesSect from "./LesSect";
import arcade from "../commonResource/images/icons/arcade.png";

export default class SixthSect extends Component {
	render() {
		return (
			<div>
				<section className="sixth-heghlight-wrapper">
					<div className="container-fluid">
						<div className="row">
							<div className="left-side-wrapper col-sm-12 col-md-6">
								<div className="left-side-container">
									<div className="top-logo-wrapper">
										<div className="logo-wrapper">
											<img src={arcade} />
										</div>
									</div>
									<LesSect
										firstdisc="Agent 8 is a small hero on a big mission."
										button1="play now"
										num="2"
										button2="Learn about Apple Arcade"
									/>
								</div>
							</div>
							<div className="right-side-wrapper col-sm-12 col-md-6">
								<div className="right-side-container">
									<div className="title-wraper">
										Apple Card Monthly Installments
									</div>
									<div className="description-wraper">
										Pay for your next iPhone over time, interest-free with Apple
										Card.
									</div>
									<div className="links-wrapper">
										<ul>
											<li>
												<a href="">Learn more</a>
											</li>
											<li>
												<a href="">Apply now</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}
