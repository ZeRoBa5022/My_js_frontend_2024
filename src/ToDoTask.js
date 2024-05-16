import React from 'react';
import { connect } from 'react-redux';

import { todoDelete, todoUpdateState } from './actions';

class ToDoTask extends React.Component {
	constructor(props) {
		super(props)
		
		this.onStatusClick = this.onStatusClick.bind(this);
		this.onDeleteClick = this.onDeleteClick.bind(this);
	}
	
	onStatusClick(e) {
		e.preventDefault();
		
		fetch(`tasks/${this.props.tank._id}`, {
				method: 'PATCH',
				body: JSON.stringify({
					done: !this.props.tank.done
				}),
				headers : {
					'Content-Type': 'application/json'
				}
			}).then((res) => {
			if(res.status === 200) {
				console.log('Updated');
				this.props.dispatch(todoUpdateState(this.props.tank._id));
			}
			else {
				console.log('Not updated');
			}
		});
	}
	
	onDeleteClick(e) {
		e.preventDefault();
		
		fetch(`tasks/${this.props.tank._id}`, {
				method: 'DELETE'
			}).then((res) => {
			if(res.status === 200) {
				console.log('Deleted');
				this.props.dispatch(todoDelete(this.props.tank._id));
			}
			else {
				console.log('Not deleted');
			}
		});
	}
	
	render() {
		return (
				<li>
					<div className="display">
						<div className="widget-content-left">
							<div className="widget-heading, display_I">
								{this.props.tank.done ? <div className="green"></div> : <div className="red"></div>}
								&nbsp;{this.props.tank.name}
							</div>	
							<div>
								<div className="widget-subheading">
									<div>{this.props.tank.description}
									</div>
								</div>
							</div>
						</div>
						<div>
							<span onClick={this.onStatusClick} className="Buton">{this.props.tank.done ? 'Исправен' : 'Неисправен'}</span>
							<button className="border-0 btn-transition btn btn-outline-danger" onClick={this.onDeleteClick}><i className="far fa-trash-alt delete"></i></button>
						</div>
					</div>
				</li>
			)
		}
}

export default connect() (ToDoTask);