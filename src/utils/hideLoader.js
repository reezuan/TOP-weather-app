function hideLoader() {
    const loader = document.querySelector("#loading");
    loader.classList.remove("display");
}

export { hideLoader };