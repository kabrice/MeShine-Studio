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
 * @param isDelete : boolean action to check if we're deleting an object or not
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
    console.log('isDelete', isDelete);
    //console.log('statexxx', playStack);
        canvas.loadFromJSON(state,()=>{return isDelete}, function() {
            console.log('isDelete1', isDelete);
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

/**
 *
 * @param url
 * @returns {Element}
 */
function getVideoElement(url) {
    let videoE = document.createElement('video');
    videoE.width = 530;
    videoE.height = 298;
    videoE.muted = true;
    videoE.crossOrigin = "anonymous";
    let source = document.createElement('source');
    source.src = url;
    source.type = 'video/mp4';
    videoE.appendChild(source);
    return videoE;
}

function leftToRightResizeble(div) {
    const element = document.querySelector(div);
    const currentResizer = document.querySelector(div + ' .design-bar')

    currentResizer.addEventListener('mousedown', function(e) {
        e.preventDefault()
        window.addEventListener('mousemove', resize)
        window.addEventListener('mouseup', stopResize)
    })

    function resize(e) {

        if (currentResizer.classList.contains('design-bar')) {
            let style = window.getComputedStyle(element)
            let oldFlexGrow = style.getPropertyValue('flex-grow')
            let oldWidth = element.getBoundingClientRect().width
            console.log('oldFlexGrow', oldFlexGrow);
            let newFlexGrow = oldFlexGrow*e.pageX/oldWidth
            if(newFlexGrow>0.5 && newFlexGrow<3){
                element.style.flexGrow = newFlexGrow
                element.style.height = '100%'
            }
        }
    }

    function stopResize() {
        window.removeEventListener('mousemove', resize)
    }

}

// Now you have to export each function you want
export {
    saveCanvas,
    replay,
    deleteSelectedObjectsFromCanvas,
    getVideoElement,
    leftToRightResizeble
};
