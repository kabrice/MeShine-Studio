export function selectAnimation(animation){
    //SelectAnimation is an ActionCreator, it needs to return an action, an object with a type property
    return {
        type: 'ANIMATION_SELECTED',
        payload: animation
    };
}