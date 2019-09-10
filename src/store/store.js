import { createStore, combineReducers, applyMiddleware } from 'redux';
import { requestHomeReducer, fetchItemsReducer } from '../reducers/reducers';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

const rootReducer = combineReducers({
	home : requestHomeReducer, 
	l1 : fetchItemsReducer
});

const logger = createLogger();

export const appStore = createStore(rootReducer,applyMiddleware(thunkMiddleware,logger))