/**
 * State argument is not application state, only the state this reducer is responsible for.
 * @param state, returns null if undefined.
 * @param action
 * @returns {*}
 */
export default function(state = null, action) {
  switch(action.type) {
  case 'BOOK_SELECTED':
    return action.payload;
  }

  return state;
}
