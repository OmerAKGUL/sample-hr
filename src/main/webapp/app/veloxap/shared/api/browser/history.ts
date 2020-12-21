// Import libraries: Browser Integration Utils
import { createBrowserHistory } from 'history';
// import SERVER_API_URL from '../../../config/constants';
// Create the history object: of your choosing (we're using a browser history in this case)
/*
About History:
*************
* Trace action under browser context
* History objects typically have the following properties and methods:
    length - (number) The number of entries in the history stack
    action - (string) The current action (PUSH, REPLACE, or POP)
    location - (object) The current location. May have the following properties:
        pathname - (string) The path of the URL
        search - (string) The URL query string
        hash - (string) The URL hash fragment
        state - (object) location-specific state that was provided to e.g. push(path, state) when this location was pushed onto the stack. Only available in browser and memory history.
    push(path, [state]) - (function) Pushes a new entry onto the history stack
    replace(path, [state]) - (function) Replaces the current entry on the history stack
    go(n) - (function) Moves the pointer in the history stack by n entries
    goBack() - (function) Equivalent to go(-1)
    goForward() - (function) Equivalent to go(1)
    block(prompt) - (function) Prevents navigation (see the history docs)
 * Typical Implementations
    “browser history” - A DOM-specific implementation, useful in web browsers that support the HTML5 history API
    “hash history” - A DOM-specific implementation for legacy web browsers
    “memory history” - An in-memory history implementation, useful in testing and non-DOM environments like React Native
*/
const history = createBrowserHistory();
export default history;

/*
export const history = createBrowserHistory({
  basename: SERVER_API_URL   //use base url different from "/", otherwise most browsers consider setting root level absolute paths as security breach !
});*/

// export default history;
