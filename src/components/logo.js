import SiteLogo from "../assets/cat-logo-white.png";

function logo() {
    const logo = document.createElement("div");
    logo.classList.add("logo");
    
    const logoImg = new Image();
    logoImg.src = SiteLogo;
    logoImg.className = "site-logo";

    logo.appendChild(logoImg);

    return logo;
}

export { logo };