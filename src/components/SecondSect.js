import React, { Component } from "react";

import BigSect from "./BigSect";
export default class SecondSect extends Component {
	render() {
		return (
			<div>
				<section className="second-hightlight-wrapper">
					<BigSect
						New="New"
						title="MacBook Air"
						className="title-wraper black bold"
						className2="description-wrappe black"
						disc=" Twice the speed. Twice the storage."
						price="From $999."
						button="Buy"
						grey="grey"
					/>
				</section>
			</div>
		);
	}
}
