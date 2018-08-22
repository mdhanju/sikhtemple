import * as TYPES from '../actions/appActionTypes';

export default function carousel(state = {}, action) {
	switch (action.type) {
	case TYPES.IMAGES:
		return {
			...state,
			images: action.value
		}
		default:
		return state
	}
}
