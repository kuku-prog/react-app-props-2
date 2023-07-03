import React, { Component } from "react";
import BigSect from "./BigSect";
import LesSect from "./LesSect";

export default class FourthSect extends Component {
	render() {
		return (
			<div>
				{" "}
				<section className="fourth-heghlight-wrapper">
					<div className="container-fluid">
						<div className="row">
							<div className="left-side-wrapper col-sm-12 col-md-6">
								<div className="left-side-container">
									<BigSect
										title="iPhone 11"
										className="title-wraper black"
										className2="description-wrappe"
										grey="price-wrapper"
										disc="   Just the right amount of everything."
										price=" From $18.70/mo. or $499 with trade‑in."
										button="Apply now"
										num="1"
									/>
								</div>
							</div>
							<div className="right-side-wrapper col-sm-12 col-md-6">
								<div className="right-side-container">
									<LesSect
										disc="Get the latest CDC response to COVID-19."
										linkCol="title-wraper white"
										button1="Watch the PSA"
										button2=""
									/>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}
