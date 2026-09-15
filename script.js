function showMessage() {
    document.getElementById("message").textContent =
        "Welcome! Thanks for visiting my portfolio.";
}

function submitForm(event) {
    event.preventDefault();

    document.getElementById("formMessage").textContent =
        "Thank you! Your message has been submitted.";

    event.target.reset();
}
