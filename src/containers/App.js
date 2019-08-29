import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestHomeAction } from '../actions/actions'
import HomeCard from '../components/HomeCard'

import './App.css';

const mapStateToProps = state => ({
		homeEntries : state.home.entries,
		isPending : state.home.isPending
	})

const mapDispatchToProps = dispatch => ({
		onHomeEntriesRequest : () => dispatch(requestHomeAction())
	})

class App extends Component {
	componentDidMount() {
		this.props.onHomeEntriesRequest()
	}

	onCardClick = (index) => {
		const { homeEntries } = this.props;
		const entries = Object.entries(homeEntries);
		const clickedEntry = entries[index];
		console.log("Clicked", clickedEntry[0], clickedEntry[1]);
	}

	render() {
		const { isPending, homeEntries } = this.props;

		return isPending ? (<div> Loading </div>) : 
			(<div id="container"> 
				<div id="title">The Star Wars World</div>
				<div id="cardContainer">
					{Object.entries(homeEntries).map((entry,index) => {
						return (<HomeCard 
									key={index} 
									title={entry[0].toUpperCase()}
									onCardClick={() => this.onCardClick(index)} 
								/>)
					})}
				</div>
			</div>
		);
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
