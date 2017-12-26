import { combineReducers } from 'redux';
import AnimationsReducer from './reducer_animation';

const rootReducer = combineReducers({
    animations: AnimationsReducer
});
export default rootReducer;
