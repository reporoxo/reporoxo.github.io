document.addEventListener("DOMContentLoaded", function () {
    const messages = {
        "about.html": "Have we gotten a bit closer?",
        "projects.html": "I loved working on all of these!",
        "contact.html": "Feel free to reach out!",
        "downloads.html": "Saw anything you liked?"
    };

    // Check the current page and display a message
    const path = window.location.pathname.split("/").pop();
    if (messages[path]) {
        alert(messages[path]); // You can replace this with a styled popup
    }
});