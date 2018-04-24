/**
 * A function that returns a piece of our application state which is a list of books.
 * @returns an array of Javascript objects that have a keyword 'title' and the actual title.
 */
export default function() {
  return [
    { title: 'Javascript, The Good Parts', pages: 101 },
    { title: 'Harry Potter', pages: 39 },
    { title: 'The Dark Tower', pages: 85 },
    { title: 'Eloquent Ruby', pages: 1 }
  ];
}
