import {
	REQUEST_HOME_PENDING,
	REQUEST_HOME_SUCCESS,
	REQUEST_HOME_FAILED,
	FETCH_ITEMS_PENDING,
	FETCH_ITEMS_SUCCESS,
	FETCH_ITEMS_FAILED
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

const initialItemsState = {
	isPending : false,
	items : [],
	error : ""
}

export const fetchItemsReducer = (state = initialItemsState, action = {}) => {
	switch(action.type) {
		case FETCH_ITEMS_PENDING : {
				let items = state.items ? state.items : []
				return Object.assign({},state,{isPending: true, items : items})
			}
		case FETCH_ITEMS_SUCCESS :{ 
				let items = state.items ? state.items : []
			    const { title, requestUrl, data } = action.payload
			    items[title] = { title, requestUrl, data}
				return Object.assign({},state,{isPending: false, items: items})
			}
		case FETCH_ITEMS_FAILED : {
				let items = state.items ? state.items : []
				return Object.assign({}, state, {isPending: false, items : items, error : action.payload})
			}
		default : 
			return state
	}
}
