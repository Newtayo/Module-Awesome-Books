import display from './displayfunction.js';
import { Books, updatingstorage, dynamicbook } from './books.js';

const addingbook = document.querySelector('.addingbook');

export default class Activity {
  addbook() {
    const leg = dynamicbook();
    const newBook = new Books();
    newBook.title = addingbook.elements.title.value;
    newBook.author = addingbook.elements.author.value;
    // newBook.id = `${new Date().getTime()}`;
    newBook.id = `${leg.length + 1}`;
    leg.push(newBook);

    updatingstorage(leg);
    display();
    addingbook.elements.title.value = '';
    addingbook.elements.author.value = '';

    return this;
  }
}
