function setDefaults() {
    if (!localStorage.getItem("measurementSystem")) {
        localStorage.setItem("measurementSystem", "metric");
    }

    if (!localStorage.getItem("lastSearch")) {
        localStorage.setItem("lastSearch", "Singapore");
    }
};

export { setDefaults };