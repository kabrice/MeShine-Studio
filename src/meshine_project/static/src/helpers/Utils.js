/* Utils.js */
/* This file contains functions you can use anywhere in your application */

function myTestFunct(label) {
    alert('my text is '+ label)
}

/**
 * Undo action for canvas (from: https://jsfiddle.net/edgarkamdem/8d3ue54w/5/)
 * @param e
 * @param undoStack
 * @param canvas
 * @returns {Array}
 */
function undo(undoStack, canvas) {

    let redoStack = [];
    let undoData = undoStack.pop();
    //Todo: Think of adding the deleted case
    if(undoData && undoData.type){
        let objectById = canvas.getObjectById(undoData.id);
        switch(undoData.type){
            case 'added':
                if(objectById.length){
                    canvas.remove(objectById[0]);

                }
                break;
            case 'modified':
                if(objectById.length){
                    for(let key in undoData.oldStage){
                        objectById[0].set(key, undoData.oldStage[key]);
                    }
                }
                break;
        }
        canvas.renderAll();
    }

    redoStack.push(undoData);

    return redoStack;
}

/**
 * Redo action for canvas (from: https://jsfiddle.net/edgarkamdem/8d3ue54w/5/)
 * @param redoStack
 * @param canvas
 * @returns {Array}
 */
function redo(redoStack, canvas){
    let undoStack = [];
    let redoData = redoStack.pop();
    if(redoData && redoData.type){
        switch(redoData.type){
            //Todo: Think of adding the deleted case
            case 'added':
                if(redoData.object){
                    canvas.add(redoData.object);

                }
                break;
            case 'modified' || 'deleted':
                console.log('deleted');
                let objectById = canvas.getObjectById(redoData.id);
                if(objectById.length){
                    for(let key in redoData.newStage){
                        objectById[0].set(key, redoData.newStage[key]);
                    }
                }
                break;
        }
        canvas.renderAll();
    }
    undoStack.push(redoData);
    return undoStack;
}

/**
 * Part of the undo/redo functionality
 * @param block
 * @returns {{left, top, width, height, scaleX, scaleY}}
 */
function buildProps(block){
    return {
        left:block.left,
        top:block.top,
        width:block.width,
        height:block.height,
        scaleX:block.scaleX,
        scaleY:block.scaleY,
    }
}

// Now you have to export each function you want
export {
    myTestFunct,
    undo,
    redo,
    buildProps
};