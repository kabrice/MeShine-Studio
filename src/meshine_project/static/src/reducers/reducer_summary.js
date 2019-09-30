//State argument is not application state, only the state this reducer is responsible for
import {FETCH_SUMMARY} from "../actions/index";

export default function (state={}, action) {
    switch (action.type){
        case FETCH_SUMMARY:
            //return state.concat([action.payload.data]);
            //return [action.payload.data, ...state]; Same as above
            //console.log(FETCH_SUMMARY, action);
            return action.payload.data;
    }

    return state;
}