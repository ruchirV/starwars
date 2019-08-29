import {
	REQUEST_HOME_PENDING,
	REQUEST_HOME_SUCCESS,
	REQUEST_HOME_FAILED
} from '../constants'

export const requestHomeAction = () => (dispatch) => {
	dispatch({type : REQUEST_HOME_PENDING});

	fetch("https://swapi.co/api/?format=json")
		.then(response => response.json())
		.then(data => dispatch({type : REQUEST_HOME_SUCCESS, payload : data}))
		.catch(error => dispatch({type : REQUEST_HOME_FAILED, payload : error}))
}