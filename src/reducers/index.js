import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';
import app from './appReducers';
import content from './calendarReducers';
import calendar from './contentReducers';

export default combineReducers({
	app,
	content,
	calendar,
	form: formReducer,
})
