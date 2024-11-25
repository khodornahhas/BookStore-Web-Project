let More = document.querySelectorAll(".read-more");
    More.forEach(button =>{
        button.addEventListener("click",()=>{
            let moreText = button.previousElementSibling.querySelector("span");
            moreText.classList.toggle("visible");
            if (moreText.classList.contains("visible")) {
                button.innerText = "Read less";
            } else {
                button.innerText = "Read more";
            }
        });
    }); 
