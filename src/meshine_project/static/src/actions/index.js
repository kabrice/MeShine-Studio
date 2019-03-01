import axios from 'axios';

const ROOT_URL = 'http://localhost:8080/api';
const ROOT_ES_URL = 'http://localhost:8080/search';

export function selectAnimation(animation){
    //SelectAnimation is an ActionCreator, it needs to return an action, an object with a type property
    //Getting data from the front and then passes it to reducer (via Middleware) to be handle
    return {
        type: 'ANIMATION_SELECTED',
        payload: animation
    };
}

export const FETCH_SUMMARY = 'FETCH_SUMMARY';
export const FETCH_ANIMATION = 'FETCH_ANIMATION';
export const FETCH_TYPEFACE = 'FETCH_TYPEFACE';
export const FETCH_USER = 'FETCH_USER';
export const FETCH_SUMMARY_BYUSER = 'FETCH_SUMMARY_BYUSER';
export const CREATE_SUMMARY = 'CREATE_SUMMARY';
export const FETCH_TAG_AUTOCOMPLETE = 'FETCH_TAG_AUTOCOMPLETE';
export const UPDATE_CATEGORIES = 'UPDATE_CATEGORIES';
export const UPDATE_SUMMARY = 'UPDATE_SUMMARY';

export function notRequestingAPI(){

    return {
        type: 'IS_NOT_REQUESTING_API',
    };
}

export function requestingAPI(){

    return {
        type: 'IS_REQUESTING_API',
    };
}

export function fetchSummary(id) {
    const url = `${ROOT_URL}/summary/${id}`;
    const request = axios.get(url);

    return {
        type: FETCH_SUMMARY,
        payload: request
    };
}

export function fetchAnimation() {
    const url = `${ROOT_URL}/animation`;
    const request = axios.get(url);

    return {
        type: FETCH_ANIMATION,
        payload: request
    };
}

export function fetchTypeFace() {
    const url = `${ROOT_URL}/typeFace`;
    const request = axios.get(url);

    return {
        type: FETCH_TYPEFACE,
        payload: request
    };
}

export function fetchUser(userid) {
    const url = `${ROOT_URL}/user/${userid}`;
    const request = axios.get(url);

    return {
        type: FETCH_USER,
        payload: request
    };
}

export function fetchSummaryByUser(userid) {
    const url = `${ROOT_ES_URL}/questionsummaries/?summary.user_profiles.id=${userid}&main_question=true`;
    const request = axios.get(url);

    return {
        type: FETCH_SUMMARY_BYUSER,
        payload: request
    };
}

export function createSummaryProject(value, callback, callbackError) {
    const request = axios.post(`${ROOT_URL}/summary/`, value)
                            .then((response) => callback(response))
                            .catch((error) => callbackError(error.response));

    return{
        type: CREATE_SUMMARY,
        payload: request
    };

}

export function fetchTagByAutocompletion(tagTitle, callback) {
    const url = `${ROOT_ES_URL}/tags/?title__wildcard=*${tagTitle}*&ordering=-title&limit=15`;
    const request = axios.get(url).then((response) => callback(response));

    return {
        type: FETCH_TAG_AUTOCOMPLETE,
        payload: request
    };
}

export function fetchTopicByAutocompletion(topicTitle, callback) {
    const url = `${ROOT_ES_URL}/categories/?title__wildcard=*${topicTitle}*&ordering=-title&limit=15`;
    const request = axios.get(url).then((response) => callback(response));

    return {
        type: FETCH_TAG_AUTOCOMPLETE,
        payload: request
    };
}

export function fetchQuestionByAutocompletion(title, callback) {
    const url = `${ROOT_ES_URL}/questions/?search=title|${title}&ordering=-_score&limit=15`;
    const request = axios.get(url).then((response) => callback(response));

    return {
        type: FETCH_TAG_AUTOCOMPLETE,
        payload: request
    };
}

export function updateCategories(value, callback, callbackError) {
    const request = axios.post(`${ROOT_URL}/category/`, value)
        .then((response) => callback(response))
        .catch((error) => callbackError(error.response));

    return{
        type: UPDATE_CATEGORIES,
        payload: request
    };

}

export function updateSummary(value, id, callback, callbackError) {
    const request = axios.put(`${ROOT_URL}/summary/${id}/`, value)
        .then((response) => callback(response))
        .catch((error) => callbackError(error.response));

    return{
        type: UPDATE_SUMMARY,
        payload: request
    };
}

export function createSummaryPlayerFile(value, id, callback, callbackError) {
    const request = axios.put(`${ROOT_URL}/summary/${id}/`, value)
        .then((response) => callback(response))
        .catch((error) => callbackError(error.response));

    return{
        type: UPDATE_SUMMARY,
        payload: request
    };

}



