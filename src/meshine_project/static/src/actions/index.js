import axios from 'axios';

const ROOT_URL = 'http://localhost:8080/api';

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
export const FETCH_USER = 'FETCH_USER';
export const FETCH_SUMMARY_BYUSER = 'FETCH_SUMMARY_BYUSER';

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

export function fetchUser(userid) {
    const url = `${ROOT_URL}/user/${userid}`;
    const request = axios.get(url);

    return {
        type: FETCH_USER,
        payload: request
    };
}

export function fetchSummaryByUser(userid) {
    const url = `${ROOT_URL}/userProfileSummary/${userid}`;
    const request = axios.get(url);

    return {
        type: FETCH_SUMMARY_BYUSER,
        payload: request
    };
}

export function createSummaryProject(values) {
    const url = `${ROOT_URL}/UserProfileSummary/${userid}`;
    const request = axios.get(url);


}
