/* Index.js */
/* Inside this file you will import your other helper files */

// Import each file using the * notation
// This will import automatically every function exported by these files
import * as Utils from './Utils.js';
import * as Animations from './Animations.js';
import * as CanvasHandler from './CanvasHandler'

// Export again
export {
    Utils,
    Animations,
    CanvasHandler,
};