import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import AnimationsReducer from './reducer_animation';
import ActiveAnimation from './reducer_active_animation';
import SummaryReducer from './reducer_summary';
import TypeFaceReducer from './reducer_typeface';
import SummaryByUser from './reducer_summary_byuser';
import User from './reducer_user';
import RequestingAPI from './reducer_requesting_api';
import UserFiles from './reducer_user_files';

const rootReducer = combineReducers({
    animations: AnimationsReducer,
    activeAnimation: ActiveAnimation,
    summary: SummaryReducer,
    summaryByUser: SummaryByUser,
    typefaces: TypeFaceReducer,
    user: User,
    requestingAPI: RequestingAPI,
    form: formReducer,
    files: UserFiles
});
export default rootReducer;
