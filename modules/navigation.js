const navigation = () => {
  const links = document.querySelectorAll('.link');
  const fun = document.querySelectorAll('.fun');

  const section = document.querySelectorAll('section');

  links.forEach((link) => link.addEventListener('click', (e) => {
    if (e.target.id) {
      fun.forEach((funs) => {
        funs.classList.remove('blue');
      });
      e.target.classList.add('blue');
      section.forEach((sec) => {
        sec.classList.add('hide');
        if (sec.id === e.target.id) {
          sec.classList.remove('hide');
        }
      });
    }
  }));
};
export default navigation;