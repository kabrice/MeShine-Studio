import _ from 'lodash';
import {FETCH_SUMMARY_BYUSER} from "../actions/index";

export default function (state={}, action) {

    switch (action.type){
        case FETCH_SUMMARY_BYUSER:
            return _.mapKeys(action.payload.data.results, 'summary.id');

    }

    return state;
}