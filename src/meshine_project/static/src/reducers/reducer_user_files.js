import {FETCH_USER_FILE} from "../actions/index";

export default function (state={}, action) {

    switch (action.type){
        case FETCH_USER_FILE:
            return action.payload.data;

    }

    return state;
}