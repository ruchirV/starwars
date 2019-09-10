import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Level1Styles.css"

class Level1 extends Component {

	render () {

		const { title, l1Data } = this.props;
		const items = l1Data[title]['data']['results'];
		//const items = [];

		return (
			<div class="l1">
				<div className="l1-container">
					<span className="l1-title">
						{title}
					</span>

					<ul className="l1-list">
						{
							items.map((item) => {
								return (
									<li>
										{item.name};
									</li>
								)
							})
						}
					</ul>
				</div>
			</div>
		)
	}

}

export default Level1;
