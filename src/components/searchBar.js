function searchBar() {
    const searchBar = document.createElement("div");
    const form = document.createElement("form");
    const input = document.createElement("input");

    searchBar.classList.add("search-bar");

    form.appendChild(input);
    searchBar.appendChild(form);

    return searchBar;
}

export { searchBar };