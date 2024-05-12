import React from 'react';


class ToDoTask extends React.Component {
	constructor(props) {
		super(props)
		
		this.state = {
			done: this.props.task.done
		}
		
		this.onStatusClick = this.onStatusClick.bind(this);
		this.onDeleteClick = this.onDeleteClick.bind(this);
	}
	
	onStatusClick(e) {
		e.preventDefault();
		
		fetch(`tasks/${this.props.task._id}`, {
				method: 'PATCH',
				body: JSON.stringify({
					done: !this.state.done
				}),
				headers : {
					'Content-Type': 'application/json'
				}
			}).then((res) => {
			if(res.status === 200) {
				console.log('Updated');
				
				this.setState({
					done: !this.state.done
				});
			}
			else {
				console.log('Not updated');
			}
		});
	}
	
	onDeleteClick(e) {
		e.preventDefault();
		
		fetch(`tasks/${this.props.task._id}`, {
				method: 'DELETE'
			}).then((res) => {
			if(res.status === 200) {
				console.log('Deleted');
				this.props.onTaskDelete(this.props.task._id);
			}
			else {
				console.log('Not deleted');
			}
		});
	}
	
	render () {
			return (
				<li> 
					<span>{this.props.task.name} </span>
					<span>{this.props.task.description} </span>
					<span onClick ={this.onStatusClick}>{this.state.done ? 'Done' : 'Todo'} </span>
					<button onClick={this.onDeleteClick}>Delete</button>
				</li>
			)
		}
}

export default ToDoTask;

















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
		/*this.onStatusClick = this.onStatusClick.bind(this);
		this.onDeleteClick = this.onDeleteClick.bind(this);
	}
	
	onStatusClick(e) {
		e.preventDefault();
		
		this.setState({
			done: !this.state.done
		});
	}
	
	onDeleteClick(e) {
		e.preventDefault();
		
		fetch(`tasks/$(this.props.task._id)`, {
			method: 'DELETE'
		}).then((res) => {
			if (res.status === 200) {
				console.log('Delete');
				this.props.onTaskDelete(this.props.task._id);
			}
			else {
				console.log('Not deleted');
			}
		});
	}
	
	render() {
		return (
	<li onClick={this.onStatusClick}>{this.props.task.name} - {this.state.done ? 'Done' : 'Todo'}  <button onClick={this.onDeleteClick}>Delete</button></li>
		)
	}
}

export default ToDoTask; */