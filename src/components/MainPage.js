import React, {Component} from 'react';

import Header from '../components/Header';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundary';
import './MainPage.css';

class MainPage extends Component {

	componentDidMount(){
		this.props.onRequestRobots();
	}
	filterRobots = (robots) => {
		return this.props.robots.filter((robot) => {
			return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase())
		})
	}
	render() {
		const {searchField, onSearchChange, robots, isPending} = this.props;
		const filteredRobots = this.filteredRobots;
		return isPending
			? <h1>Loading</h1>
			: (
				<div className="tc">
					<Header />
					<SearchBox searchChange={onSearchChange}/>
					<Scroll>
						<ErrorBoundry>
							<CardList robots={this.filterRobots()} />
						</ErrorBoundry>
					</Scroll>
				</div>
			)
	}
}

export default MainPage;