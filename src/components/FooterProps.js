import React, { Component } from "react";

export default class FooterProps extends Component {
	render() {
		const { title, links } = this.props;
		return (
			<ul>
				{links.map((link, index) => (
					<li key={index}>
						<a href={link.href}>{link.title}</a>
					</li>
				))}
			</ul>
		);
	}
}
