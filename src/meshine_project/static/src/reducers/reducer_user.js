import _ from 'lodash';
import {FETCH_USER} from "../actions/index";

export default function (state={}, action) {

    switch (action.type){
        case FETCH_USER:
            return _.mapKeys(action.payload.data.results, 'id');

    }

    return state;
}