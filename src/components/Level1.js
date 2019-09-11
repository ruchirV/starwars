import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Level1Styles.css"

class Level1 extends Component {

	render () {

		const { title, l1Data } = this.props;
		const items = l1Data[title]['data']['results'];

		return (
				<div class="wrapper">
				    <div class="header">
				      <div class="inner">
				      	<div className="mainTitle">{title}</div>
				      	<hr />
				      </div>
				    </div>

				    <div class="content">
				      <div class="inner">
				        <div class="scrollable">
				          <div>
				          	{items.map((item) => {
				          		return  (
			          			<div className="item-title grow">
				          			{item.name ? item.name : (item.title ? item.title : "")}
			          			</div>);
				          	})}
				          </div>
				        </div>
				      </div>
				    </div>

				    <div class="footer">
				      <div class="inner">
				          <div className="nav-wrapper"> 
					          <div className="nextprev grow"> prev </div>
						      <div className="nextprev grow"> next </div>
				          </div>
				      </div>
				    </div>

				  </div>
		)
	}

}

export default Level1;
