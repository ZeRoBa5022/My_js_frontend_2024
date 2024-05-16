import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import ToDoTask from './ToDoTask';



class ToDoList extends React.Component {
	render() {
		return (
			<div className="mar_border">
				<div className="cover-img">
					<div className="cover-inner">
					</div>
				</div>
				<div className="display">
					<div>
						<h4><i className="fa fa-tasks"></i>&nbsp;Tank List</h4>
					</div>
					<div className="input-buttons, display">
						<NavLink to='/add'><h5>Добавить танк</h5></NavLink>
					</div>
				</div>
				
				<div className="scroll-area-sm">
					<perfect-scrollbar className="ps-show-limits">
					<div style={{position: "static"}} className="ps ps--active-y">
						<div className="ps-content">
							<ul className=" list-group list-group-flush">
								{
									this.props.tasks.map((tank) => {
										return (
											<ToDoTask tank={tank} key={tank._id} />
										)
									})
								}
							</ul>
						</div>
					</div>
					</perfect-scrollbar>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		tasks: [...state.tasks]
	}
}

export default connect(mapStateToProps)(ToDoList);
