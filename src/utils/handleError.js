function handleError(err) {
    console.log(err);
    if (err.error && err.error.code) {
        switch (err.error.code) {
            case 1006:
                console.log("Error: No matching location found.");
                break;
            default:
                console.error(`Error: ${err.error.message}`);
        }
    } else {
        console.error("An unknown error occurred.", err);
    }
};

export { handleError };