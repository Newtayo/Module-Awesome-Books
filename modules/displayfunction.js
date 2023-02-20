import { bookArrangement, dynamicbook } from './books.js';

const ContainerSection = document.querySelector('.container');

const display = () => {
  const land = dynamicbook();
  ContainerSection.innerHTML = '';
  land.forEach((book) => {
    bookArrangement(book);

    // bookremoval(book);
  });
};

export default display;