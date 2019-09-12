import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Level1Styles.css"

class Level1 extends Component {

	handlePrevClick = () => {
		const { title, l1Data } = this.props;
		const prevLink = l1Data[title]['data']['previous']
		this.props.fetchL1Items(title,prevLink)
	}

	handleNextClick = () => {
		const { title, l1Data } = this.props;
		const nextLink = l1Data[title]['data']['next']
		this.props.fetchL1Items(title,nextLink)
	}

	render () {

		const { title, l1Data } = this.props;
		const items = l1Data[title]['data']['results'];

		const nextLink = l1Data[title]['data']['next']
		const prevLink = l1Data[title]['data']['previous']

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
					          {(prevLink !== null) && <div className="nextprev grow" onClick={this.handlePrevClick}> prev </div>}
						      {(nextLink !== null) && <div className="nextprev grow" onClick={this.handleNextClick}> next </div>}
				          </div>
				      </div>
				    </div>

				  </div>
		)
	}

}

export default Level1;
