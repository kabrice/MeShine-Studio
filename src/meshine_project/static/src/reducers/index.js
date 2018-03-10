import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import AnimationsReducer from './reducer_animation';
import ActiveAnimation from './reducer_active_animation';
import SummaryReducer from './reducer_summary';
import SummaryByUser from './reducer_summary_byuser'
import User from './reducer_user'

const rootReducer = combineReducers({
    animations: AnimationsReducer,
    activeAnimation: ActiveAnimation,
    summary: SummaryReducer,
    summaryByUser: SummaryByUser,
    user: User,
    form: formReducer
});
export default rootReducer;
