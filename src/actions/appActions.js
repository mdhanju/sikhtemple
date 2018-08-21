// import axios from 'axios';
// import _get from 'lodash/get';
import * as TYPES from './appActionTypes';
// import { BASE_URL } from '../constants';

export function updateToken(value) {
	return {
		type: TYPES.AUTH_TOKEN,
		value
	}
}

export function loading(value) {
	return {
		type: TYPES.LOADING,
		value
	}
}

export function updateTabs(value) {
	return {
		type: TYPES.TABS,
		value
	}
}

export function selectedTab(value) {
	return {
		type: TYPES.SELECTED_TAB,
		value
	}
}
