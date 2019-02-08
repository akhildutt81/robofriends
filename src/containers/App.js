import React,{ Component } from 'react';
import { robots } from '../robots';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import './App.css';
class App extends Component{
	constructor(){
		super()
		this.state = {
			robots : [],
			searchfield : ''
		}
	}

	componentDidMount(){
		fetch("https://jsonplaceholder.typicode.com/users")
		.then(resp=>resp.json())
		.then(resp=>{
			this.setState({
				robots:resp
			});
		})
	}

	onSearchChange=(event)=>{
		this.setState({searchfield:event.target.value})
		///console.log(filteredRobots);
	}
	render=()=>{
		const {robots,searchfield} = this.state;
		const filteredRobots = robots.filter(robot =>{
			//console.log(robot);
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		});
		if(!robots.length){
			return <h1><center>Loading</center></h1>
		}
		return (
			<div className='tc'>
				<h1 className='f1'>RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
					<CardList robots={filteredRobots}/>
				</Scroll>
			</div>
		);
	}
}
export default App;