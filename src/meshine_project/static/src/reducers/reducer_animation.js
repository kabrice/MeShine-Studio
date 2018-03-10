import _ from 'lodash';
import {FETCH_ANIMATION} from "../actions/index";

export default function(state={}, action) {

    switch (action.type){
        case FETCH_ANIMATION:
            return _.mapKeys(action.payload.data.results, 'id');

    }

    return state;

}