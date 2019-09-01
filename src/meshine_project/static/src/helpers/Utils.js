/* Utils.js */
/* This file contains functions which can be used anywhere throughout the app */

/**
 * Push the current state into the undo stack and then capture the current state
 * @param canvas which is the current canvas when saveCanvas is called
 * @param state which is the current canvas which will be stack into the undo List for future undo action
 * @param undo which is the list of different canvas recent state for future undo action
 * @returns {{canvas: *, redo: Array, state}} (https://jsfiddle.net/tazehale/q2mz23xb/)
 */
function saveCanvas(canvas, state, undo) {
    // clear the redo stack
    // initial call won't have a state
    if (state) {
        undo.push(state);
    }
    //console.log('trrtrr', (canvas._objects).length, redo, state);
    return {'canvas': canvas, 'redo': [], 'state':JSON.stringify( canvas.toJSON(['_id', '_boundingRect', '_svg', 'evented', 'selectable', 'hoverCursor']))}
}

/**
 * Save the current state in the redo stack, reset to a state in the undo stack, and enable the buttons accordingly.
 * Or, do the opposite (redo vs. undo)
 * @param isDelete : an action to check if we're deleting an object or not
 * @param playStack which stack to get the last state from and to then render the canvas as
 * @param saveStack which stack to push current state into
 * @param state which is current unsaved state of the canvas.
 * @param canvas. (https://jsfiddle.net/tazehale/q2mz23xb/)
 */
function replay(isDelete, playStack, saveStack, state, canvas) {
    //console.log('(canvas._objects.length', canvas._objects.length);
    //if(canvas._objects.length!==2){
        saveStack.push(state);
        state = playStack.pop();
        //canvas.clear();
        canvas.loadFromJSON(state,isDelete, function() {
            console.log('state', state);
            if(!isDelete)
            canvas.renderAll();
        });
    //}
    return state;
}

/**
 * Create and paste objects
 */
function deleteSelectedObjectsFromCanvas(canvas){
    canvas.getActiveObjects().forEach((obj) => {
        canvas.remove(obj)
    });
    canvas.discardActiveObject().renderAll()
}
// Now you have to export each function you want
export {
    saveCanvas,
    replay,
    deleteSelectedObjectsFromCanvas
};