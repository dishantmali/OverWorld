document.addEventListener("DOMContentLoaded", function () {
    startLoading();
});

function startLoading() {
    const progressBar = document.getElementById("progress-bar");

    setTimeout(() => {
        progressBar.style.width = "100%";
        finishLoading();
    }, 1500);
}

function finishLoading() {
    setTimeout(() => {
        const loadingScreen = document.getElementById("loading-screen");
        const homePage = document.getElementById("home-page");
        const navbar = document.querySelector(".navbar");

        loadingScreen.style.opacity = "0";

        setTimeout(() => {
            loadingScreen.style.display = "none";
            homePage.style.display = "block";
            navbar.classList.add("visible");  // Show the navbar

            setTimeout(() => {
                homePage.style.opacity = "1";
            }, 300);
        }, 500);
    }, 1000);
}


//for feedback form validation
(function () {
    'use strict';
    var forms = document.querySelectorAll('.needs-validation');
    Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });
})();
