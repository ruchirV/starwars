import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HomeCard from '../components/HomeCard'

class Home extends Component {

	onCardClick = (index) => {
		const { homeEntries } = this.props;
		const entries = Object.entries(homeEntries);
		const clickedEntry = entries[index];

		const title = clickedEntry[0];
		const url = clickedEntry[1];
		this.props.fetchL1Items(title,url);
	}

	render() {
		const { homeEntries } = this.props;
		
		return (<div id="cardContainer">
			{Object.entries(homeEntries).map((entry,index) => {
				return (
					<Link key={index} to={`/l1/${entry[0]}`}>
						<HomeCard
								title={entry[0].toUpperCase()}
								onCardClick={() => this.onCardClick(index)} />
					</Link>)
			})}
		</div>);
	}
}

export default Home;