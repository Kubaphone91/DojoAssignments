import { Book } from '../books';

function randomId(): number {
  return Math.floor(Math.random() * 1000);
}

export const BOOKS: Book[] = [
  // {
  //   id: randomId(),
  //   title: 'Lord of the Rings',
  //   year: 1976,
  //   pages: 768,
  //   author: 'J.R.R. Tolkien',
  //   publisher: 'Tor Books'
  // },
  // {
  //   id: randomId(),
  //   title: 'Star Wars',
  //   year: 1980,
  //   pages: 755,
  //   author: 'George Lucas',
  //   publisher: 'Tor Books'
  // },
  // {
  //   id: randomId(),
  //   title: 'IT',
  //   year: 1988,
  //   pages: 1138,
  //   author: 'Stephen King',
  //   publisher: 'Tor Books'
  // }
];


