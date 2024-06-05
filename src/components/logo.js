function logo() {
    const logo = document.createElement("div");
    const logoImg = document.createElement("img");

    logo.classList.add("logo");

    logo.appendChild(logoImg);

    return logo;
}

export { logo };