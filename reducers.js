import { combineReducers } from 'redux';
import listReducer from './components/List/reducer';

const rootReducer = combineReducers({
	listReducer
});

export default rootReducer;