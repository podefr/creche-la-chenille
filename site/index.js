// highlight element de navigation selectionné
window.addEventListener('hashchange', function () {
    const selectedItem = document.querySelector('a.selected');
    if (selectedItem) {
        selectedItem.classList.remove('selected');
    }

    document.querySelector(`a[href='${ window.location.hash }']`).classList.add('selected');
});
