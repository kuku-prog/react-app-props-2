import React, { Component } from "react";

import "../commonResource/css/bootstrap.css";
import "../commonResource/css/styles.css";

export default class HeaderProps extends Component {
	render() {
		return (
			<li className="nav-item">
				<a className="nav-link js-scroll-trigger" href={this.props.linkurl}>
					{this.props.name}
				</a>
			</li>
		);
	}
}
