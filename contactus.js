document.addEventListener("DOMContentLoaded", function () {
    let form = document.querySelector("form");
    let submitButton = document.querySelector(".submit button");
    let successBox = document.getElementById("successBox"); 
    let successBtn = document.getElementById("success-btn");

    submitButton.addEventListener("click", (event) => {
    
        let name = form.querySelector('input[name="name"]').value;
        let email = form.querySelector('input[name="email"]').value;
        let message = form.querySelector('textarea[name="message"]').value;

        if (name && email && message) {
          
            successBox.style.display = "flex";
            form.querySelector('input[name="name"]').value = '';
            form.querySelector('input[name="email"]').value = '';
            form.querySelector('textarea[name="message"]').value = '';
        }
    });

    successBtn.addEventListener("click", () => {
        successBox.style.display = "none"; 
    });

    successBox.addEventListener("click", (e) => {
        if (e.target === successBox) { 
            successBox.style.display = "none";
        }
    });
    
    let scrollUpBtn = document.getElementById('scrollUpBtn');
    scrollUpBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});