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

		console.log(this.props);

		return (
			<Router>
				<div id="container"> 

					<div id="title">The Star Wars World</div>

					{isPending ? (<h1>Loading..</h1>) : 
						(
							<div>
								<Route exact={true} path="/" render={() => <Home homeEntries={homeEntries} 
										fetchL1Items={this.props.fetchL1Items}/> } />

							 	<Route path="/l1/:title" render={({match}) => {
									return (<Level1 l1Data={l1Data} 
											title={match.params.title}/>) }} />
							</div>
						)
					}
				</div>
			</Router>
		);
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
