/*
import _ from 'lodash';
import {FETCH_TAG_AUTOCOMPLETE} from "../actions/index";

export default function(state={}, action) {

    switch (action.type){
        case FETCH_TAG_AUTOCOMPLETE:
            //console.log("FETCH_TAG_AUTOCOMPLETE", action.payload.data);
            if(action.payload)
            return _.mapKeys(action.payload.data.results, 'id');
    }

    return state;

}*/
