import {
	REQUEST_HOME_PENDING,
	REQUEST_HOME_SUCCESS,
	REQUEST_HOME_FAILED
} from '../constants'

const initialState = {
	isPending : false,
	entries : [],
	error : ''
}

export const requestHomeReducer = (state = initialState, action = {}) => {
	switch(action.type) {
		case REQUEST_HOME_PENDING:
			return Object.assign({},state, { isPending : true });
		case REQUEST_HOME_SUCCESS : 
			return Object.assign({},state, { isPending : false, entries : action.payload });
		case REQUEST_HOME_FAILED : 
			return Object.assign({},state,{ isPending : false, error : action.payload });
		default :
			return state;
	}
}
