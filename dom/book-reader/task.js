const fontSize = Array.from(document.querySelectorAll('.font-size'));
const book = document.getElementById('book');

function removeSize() {
  fontSize.forEach((el) => {
    el.classList.remove('font-size_active');
    book.classList.remove('book_fs-big');
    book.classList.remove('book_fs-small');
  });
}

fontSize.forEach((element) => {
  element.onclick = () => {
    removeSize();
    element.classList.toggle('font-size_active');
    if (element.classList.contains('font-size_small')) {
      book.classList.add('book_fs-small');
    }
    if (element.classList.contains('font-size_big')) {
      book.classList.add('book_fs-big');
    }
    return false;
  };
});
