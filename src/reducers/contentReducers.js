import * as TYPES from '../actions/appActionTypes';

export default function content(state = {}, action) {
	switch (action.type) {
	case TYPES.CONTENT:
		return {
			...state,
			content: action.value
		}
	case TYPES.LANGUAGE:
		return {
			...state,
			selectedTab: action.value
		}
	default:
		return state
	}
}
