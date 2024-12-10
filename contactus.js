document.addEventListener("DOMContentLoaded", function () {
    let form = document.querySelector("form");
    let submitButton = document.querySelector(".submit button");
    let successBox = document.getElementById("successBox"); 
    let successBtn = document.getElementById("success-btn");
    let failedBox = document.getElementById("failedBox"); // Ensure this is defined
    let failedBtn = document.getElementById("failed-btn");

    submitButton.addEventListener("click", (event) => {
    
        let name = form.querySelector('input[name="name"]').value;
        let email = form.querySelector('input[name="email"]').value;
        let message = form.querySelector('textarea[name="message"]').value;
        
        if (name && email && message) {  
            
            successBox.style.display = "flex";
        }
        else{

            failedBox.style.display = "flex";
        }
    });

    successBtn.addEventListener("click", () => {
        successBox.style.display = "none"; 
        form.querySelector('input[name="name"]').value = '';
        form.querySelector('input[name="email"]').value = '';
        form.querySelector('textarea[name="message"]').value = '';
    });

    successBox.addEventListener("click", (e) => {
        if (e.target === successBox) { 
            successBox.style.display = "none";
        }
    });

    failedBtn.addEventListener("click", () => {
        failedBox.style.display = "none"; 
        form.querySelector('input[name="name"]').value = '';
        form.querySelector('input[name="email"]').value = '';
        form.querySelector('textarea[name="message"]').value = '';
    });

    failedBox.addEventListener("click", (e) => {
        if (e.target === failedBox) { 
            failedBox.style.display = "none";
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