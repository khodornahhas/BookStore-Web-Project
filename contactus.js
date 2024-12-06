document.addEventListener("DOMContentLoaded", function () {
    let form = document.querySelector("form");
    let submitButton = document.querySelector(".submit button");
    let successBox = document.getElementById("successBox"); 
    let closeModal = document.getElementById("closeModal");

    submitButton.addEventListener("click", (event) => {
        event.preventDefault(); 

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

    closeModal.addEventListener("click", () => {
        successBox.style.display = "none"; 
    });

    successBox.addEventListener("click", (e) => {
        if (e.target === successBox) { 
            successBox.style.display = "none";
        }
    });
    
    let scrollUpBtn = document.getElementById('scrollUpBtn');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            scrollUpBtn.style.display = 'flex';
        } else {
            scrollUpBtn.style.display = 'none';
        }
    });
    
    scrollUpBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});