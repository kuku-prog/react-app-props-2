import React, { Component } from "react";

export default class LesSect extends Component {
	render() {
		return (
			<div>
				<div className="title-wraper white">{this.props.disc}</div>

				<div className="description-wraper">
					{this.props.firstdisc}
					<br />
					{this.props.secdisc}
				</div>
				<div className="links-wrapper">
					<ul>
						<li>
							<a href="">
								{this.props.button1}
								<sup>{this.props.num}</sup>
							</a>
						</li>
						<li>
							<a href="">{this.props.button2}</a>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}
