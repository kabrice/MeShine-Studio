//State argument is not application state, only the state this reducer is responsible for
import {UPDATE_SUMMARY} from "../actions/index";

export default function (state=[], action) {
    switch (action.type){
        case UPDATE_SUMMARY:
            //return state.concat([action.payload.data]);
            //return [action.payload.data, ...state]; Same as above
            return action.payload.data.results;
    }

    return state;
}