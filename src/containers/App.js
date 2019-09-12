import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { requestHomeAction, fetchItems } from '../actions/actions'
import Home from "../components/Home"
import Level1 from "../components/Level1"

import './App.css';

const mapStateToProps = state => ({
		homeEntries : state.home.entries,
		isPending : state.home.isPending || state.l1.isPending,
		l1Data : state.l1.items
	})

const mapDispatchToProps = dispatch => ({
		onHomeEntriesRequest : () => dispatch(requestHomeAction()),
		fetchL1Items : (title, url) => dispatch(fetchItems(title, url))
	})

class App extends Component {
	componentDidMount() {
		this.props.onHomeEntriesRequest()
	}

	render() {
		const { isPending, homeEntries, l1Data } = this.props;

		return (
			<Router>
				<header id="title">The Star Wars World</header>
				{(isPending) ? (
					<div className="loading">
						Loading..
					</div>
					) : (
					<div className="container">
						<Route exact={true} path="/" render={() => <Home homeEntries={homeEntries} 
								fetchL1Items={this.props.fetchL1Items}/> } />

					 	<Route path="/l1/:title" render={({match}) => {
							return (<Level1 l1Data={l1Data} 
									title={match.params.title} 
									fetchL1Items={this.props.fetchL1Items}
									/>) }} />
					</div>)
				}
			</Router>
		);
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
