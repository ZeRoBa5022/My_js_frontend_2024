import React from 'react';

import ToDoTask from './ToDoTask';

class ToDoList extends React.Component {
	render () {
		return (
			<div className="List">
				<ul>
				{
					this.props.tasks.map((task) => {
						return (
							<ToDoTask task ={task} onTaskDelete = {this.props.onTaskDelete}  key={task._id}/>
						)
					})
				}
				</ul>
			</div>
		);
	}
}

export default ToDoList;

















/*import ToDoTaskAdd from './ToDoTaskAdd';

class App extends React.Component {
	constructor(props) {
		super(props)
		
		this.state = {
			tasks: []
		}
		
		this.onTaskDelete = this.onTaskDelete.bind(this);
	}
	
	componentDidMount() {
		fetch('tasks').then(function(res) {
			return res.json();
		}).then((data) => {
			this.setState({
				tasks: data
			});
		});
	}
	
	onTaskDelete(_id) {
		this.setState ({
			tasks: this.state.tasks.filter(function(task) {
				return task._id !==_id;
			})
		});
	}
	
	render() {
		return (
			<div className="App">
				<ToDoTaskAdd />
				<ul>
				{
					this.state.tasks.map((task) => {
						return (
							<ToDoTask task={task} onTaskDelete={this.onTaskDelete} key={task._id} />
						)
					})
				}
				</ul>
			</div>
		);
	}
}

export default App; */