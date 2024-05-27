function toggleLinks() {
    const linksDiv = document.getElementById('links');
    if (linksDiv.classList.contains('show-links')) {
        linksDiv.classList.remove('show-links');
    } else {
        linksDiv.classList.add('show-links');
    }
}
