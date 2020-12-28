// highlight element de navigation selectionné
let currentPage;

window.addEventListener('hashchange', function () {
  hideSection(currentPage);
  currentPage = window.location.hash;
  showSection(currentPage);
});

window.addEventListener('load', function () {
  const id = window.location.hash || '#accueil';

  currentPage = id;
  showSection(id)
});

function showSection(id) {
  document.querySelector(`a[href='${id}']`).classList.add('selected');
  document.querySelector(`${id}`).classList.add('visible');
}

function hideSection(id) {
  document.querySelector(`a[href='${id}']`).classList.remove('selected');
  document.querySelector(`${id}`).classList.remove('visible');
}
