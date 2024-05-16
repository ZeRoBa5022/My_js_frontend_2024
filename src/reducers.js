import { combineReducers } from 'redux';

import {TODO_ADD, TODO_ADD_ALL, TODO_DELETE, TODO_UPDATE_STATE} from './actions';


function todo(state =[], action) {
	switch (action.type) {
		case TODO_ADD:
			return [
			...state, 
			{
				_id: action._id, 
				name: action.name, 
				description: action.description, 
				done: false
			}
		]
		case TODO_ADD_ALL:
			return [
			...action.todo_list
			]
		case TODO_DELETE:
			return state.filter(function(tank) {
				return tank._id !== action._id;
			})
		case TODO_UPDATE_STATE:
			return state.map(function(tank) {
				if (tank._id === action._id) {
					return {...tank, done: !tank.done}
				}
				return tank
			})
		default:
			return state
	}
}

export default combineReducers ({
	tasks: todo
});