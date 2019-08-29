import { createStore, combineReducers, applyMiddleware } from 'redux';
import { requestHomeReducer } from '../reducers/reducers';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

const rootReducer = combineReducers({home : requestHomeReducer})
const logger = createLogger();

export const appStore = createStore(rootReducer,applyMiddleware(thunkMiddleware,logger))