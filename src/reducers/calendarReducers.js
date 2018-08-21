import * as TYPES from '../actions/appActionTypes';

export default function app(state = {}, action) {
	switch (action.type) {
	case TYPES.AUTH_TOKEN:
		return {
			...state,
			tokens: action.value
		}
	case TYPES.SELECTED_TAB:
		return {
			...state,
			selectedTab: action.value
		}
	case TYPES.TABS:
		return {
			...state,
			tabs: action.value
		}
	case TYPES.LOADING:
		return {
			...state,
			loading: action.value
		}
	default:
		return state
	}
}
