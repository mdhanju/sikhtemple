import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';
import app from './appReducers';
import content from './calendarReducers';
import calendar from './contentReducers';
import carousel from './carouselReducers';

export default combineReducers({
	app,
	content,
	calendar,
	carousel,
	form: formReducer,
})
