import _ from 'lodash';
import {FETCH_TYPEFACE} from "../actions/index";

export default function(state={}, action) {

    switch (action.type){
        case FETCH_TYPEFACE:
            return _.mapKeys(action.payload.data.results, 'id');

    }

    return state;

}