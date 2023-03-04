let bookcollection;
export class Books {
  constructor(title, author, id) {
    this.title = title;
    this.author = author;
    this.id = id;
  }
}
const dynamicbook = () => {
  if (localStorage.getItem('links')) {
    bookcollection = JSON.parse(localStorage.getItem('links'));
  }
  return bookcollection;
};

const updatingstorage = (id) => {
  localStorage.setItem('links', JSON.stringify(id));
};
const bookremoval = (id) => {
  const filtered = bookcollection.filter((elem) => elem.id !== id);
  bookcollection = filtered;
  updatingstorage();
  return this;
};

const bookArrangement = (data) => {
  const ContainerSection = document.querySelector('.container');
  const bookdetails = document.createElement('div');
  bookdetails.className = 'bookdetails';
  bookdetails.innerHTML = `<h1 class="booktitle">"${data.title}" </h1>
      <h3 class="author"> by ${data.author}</h3>
      <button class="remove" type="submit" id="${data.id}" => Remove</button>
      
      <hr>`;
  ContainerSection.append(bookdetails);
  const removeBtn = document.getElementById(`${data.id}`);
  removeBtn.addEventListener('click', (e) => {
    bookremoval(e.target.id);
    ContainerSection.innerHTML = '';
    updatingstorage(bookcollection);
    bookcollection.forEach((book) => {
      bookArrangement(book);
    });

    // console.log(bookcollection)
  });
};
export { bookArrangement, updatingstorage, dynamicbook };
