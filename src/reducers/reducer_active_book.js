/**
 *  State argument is not application state, only the state this reducer is responsible for.
 *  We need to handle case when app is first booted and no book is selected. We don’t want
 *  the Reducer to return ‘undefined’. So default the value of state to ‘null’.
 * @param state, returns null if undefined.
 * @param action
 * @returns {*}
 */
export default function(state = null, action) {
    switch(action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }

    return state;  // case when reducer doesn't care about action.
}
