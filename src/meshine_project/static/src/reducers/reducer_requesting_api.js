
export default function (state={}, action) {
    switch (action.type){
        case "IS_NOT_REQUESTING_API":
            return {isRequestingAPI: false};
        case "IS_REQUESTING_API":
            return {isRequestingAPI: true};
    }

    return state;
}