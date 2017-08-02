/**
 *  An Action Creator is a function that returns an action.
 *  Returns an action which is automatically sent to all reducers.
 *  selectBook is an ActionCreator, it needs to return an action, an object with a type property.
 *  @param book which is an object with a title
 *  @returns {{type: string, payload: *}}
 */
export function selectBook(book) {
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}
