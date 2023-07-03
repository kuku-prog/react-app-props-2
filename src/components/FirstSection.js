import React, { Component } from "react";
import BigSect from "./BigSect";

export default class FirstSection extends Component {
	render() {
		return (
			<div>
				<section className="first-hightlight-wrapper">
					className="second-hightlight-wrapper">
					<BigSect
						New="New"
						title="iPad Pro"
						className="title-wraper black bold"
						button="Order"
					/>
					<div class="ipod-caption row">
						<div class="col-sm-12 col-md-6 text-md-right">
							iPad Pro available starting 3.25
						</div>
						<div class="col-sm-12 col-md-6 text-md-left">
							Magic Keyboard coming in May
						</div>
					</div>
				</section>
			</div>
		);
	}
}
