import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

/**
 * Mapping of the application state. Any key to the object we provide to combineReducers() ends up as a key on our
 * global state.
 * @type {Reducer<S>}
 */
const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
