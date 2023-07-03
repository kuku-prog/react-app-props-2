import React, { Component } from "react";
import BigSect from "./BigSect";

export default class ThirdSection extends Component {
	render() {
		return (
			<div>
				<section className="third-hightlight-wrapper">
					<BigSect
						New=""
						title="iPhone 11 Pro"
						disc=" Pro cameras. Pro display. Pro performance."
						className="title-wraper bold"
						className2="description-wrapper"
						price=" From $24.95/mo. or $599 with trade‑in."
						button="Buy"
						grey="grey"
					/>
				</section>
			</div>
		);
	}
}
