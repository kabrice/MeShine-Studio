/* Utils.js */
/* This file contains functions which can be used anywhere throughout the app */

/**
 * Push the current state into the undo stack and then capture the current state
 */
function saveCanvas(canvas, state, undo) {
    // clear the redo stack
    // initial call won't have a state
    if (state) {
        undo.push(state);
    }
    //console.log('trrtrr', (canvas._objects).length, redo, state);
    return {'canvas': canvas, 'redo': [], 'state':JSON.stringify(canvas)}
}

/**
 * Save the current state in the redo stack, reset to a state in the undo stack, and enable the buttons accordingly.
 * Or, do the opposite (redo vs. undo)
 * @param playStack which stack to get the last state from and to then render the canvas as
 * @param saveStack which stack to push current state into
 * @param state which is current unsaved state of the canvas.
 * @param canvas.
 */
function replay(playStack, saveStack, state, canvas) {
    //console.log('(canvas._objects.length', canvas._objects.length);
    //if(canvas._objects.length!==2){
        saveStack.push(state);
        state = playStack.pop();
        //canvas.clear();
        canvas.loadFromJSON(state, function() {
            canvas.renderAll();
        });
    //}
    return state;
}
// Now you have to export each function you want
export {
    saveCanvas,
    replay
};