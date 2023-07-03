import React, { Component } from "react";

export default class BigSect extends Component {
	render() {
		return (
			<div>
				<div className={this.props.contain}>
					<div className="new-alert">{this.props.New}</div>

					<div className={this.props.className}>{this.props.title}</div>
					<div className={this.props.className2}> {this.props.disc}</div>

					<div className={this.props.grey}>
						{this.props.price}
						<sup>{this.props.num}</sup>
					</div>
					<div className="links-wrapper">
						<ul>
							<li>
								<a href="">Learn more</a>
							</li>
							<li>
								<a href="">{this.props.button}</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}
