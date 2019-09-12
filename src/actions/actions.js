import {
	REQUEST_HOME_PENDING,
	REQUEST_HOME_SUCCESS,
	REQUEST_HOME_FAILED,
	FETCH_ITEMS_PENDING,
	FETCH_ITEMS_SUCCESS,
	FETCH_ITEMS_FAILED
} from '../constants'

export const requestHomeAction = () => (dispatch) => {
	dispatch({type : REQUEST_HOME_PENDING});

	fetch("https://swapi.co/api/?format=json")
		.then(response => response.json())
		.then(data => dispatch({type : REQUEST_HOME_SUCCESS, payload : data}))
		.catch(error => dispatch({type : REQUEST_HOME_FAILED, payload : error}))
}

export const fetchItems = (title,url) => (dispatch) => {
	dispatch({type : FETCH_ITEMS_PENDING});

	if(url.indexOf("format=json") === -1) {
		url = url + '?format=json'
	}

	fetch(url)
		.then(response => response.json())
		.then(data => dispatch({type : FETCH_ITEMS_SUCCESS, payload : {title : title, requestUrl : url, data : data}}))
		.catch(error => dispatch({type : FETCH_ITEMS_FAILED, payload : error}))
}