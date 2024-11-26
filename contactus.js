document.addEventListener("DOMContentLoaded", function () {
    let form = document.querySelector("form");
    let formDiv = document.querySelector(".formDiv");
    let formHeading = document.querySelector(".form-heading");
    let submitButton = document.querySelector(".submit button");
    let clearButton = document.querySelector(".clear"); 

    let dataDisplay = document.createElement("div");
    dataDisplay.className = "form-data-display";
    formDiv.appendChild(dataDisplay);
    let storedData = JSON.parse(localStorage.getItem("contactFormData")) || [];
    displayData(storedData);
  
    submitButton.addEventListener("click", () => {

        let name = form.querySelector('input[name="name"]').value;
        let email = form.querySelector('input[name="email"]').value;
        let message = form.querySelector('textarea[name="message"]').value;

        if (!name || !email || !message) {
            return;
        }

       else{

        let formData = { name, email, message };
        let storedData = JSON.parse(localStorage.getItem("contactFormData")) || [];
        storedData.push(formData);
        localStorage.setItem("contactFormData", JSON.stringify(storedData));
        displayData(storedData);
    
        form.querySelector('input[name="name"]').value = '';
        form.querySelector('input[name="email"]').value = '';
        form.querySelector('textarea[name="message"]').value = '';
 
          }
    });
    function displayData(data) {
        dataDisplay.innerHTML = ""; 

        data.forEach((entry, index) => {
            let entryDiv = document.createElement("div");
            entryDiv.className = "entry";
            entryDiv.innerHTML = `
                <p><strong>Message ${index + 1}</strong></p>
                <p>Name: ${entry.name}</p>
                <p>Email: ${entry.email}</p>
                <p>Message: ${entry.message}</p>
                <hr>
            `;
            dataDisplay.appendChild(entryDiv);
        });
    }
    clearButton.addEventListener("click", function () {
        localStorage.removeItem("contactFormData");
        dataDisplay.innerHTML = "";
    });
});