import { combineReducers } from 'redux';
import AnimationsReducer from './reducer_animation';
import ActiveAnimation from './reducer_active_animation';

const rootReducer = combineReducers({
    animations: AnimationsReducer,
    activeAnimation: ActiveAnimation
});
export default rootReducer;
