document.addEventListener("DOMContentLoaded", () => {
    const reviewStars = document.querySelectorAll(".review-stars .star");
    const userReviewStars = document.querySelectorAll(".user-review .star");
    let userRating = 0;

    reviewStars.forEach(star => {
        star.classList.add('static'); 
    });

    
    userReviewStars.forEach(star => {
        star.addEventListener("click", () => {
            userRating = parseInt(star.getAttribute("data-value"));
            userReviewStars.forEach(star => {
                if (parseInt(star.getAttribute("data-value")) <= userRating) {
                    star.classList.add("selected");
                } else {
                    star.classList.remove("selected");
                }
            });
        });
    });

    const submitButton = document.getElementById("submit-review");
    submitButton.addEventListener("click", () => {
        const bookName = document.getElementById("book-name").value;
        const reviewText = document.getElementById("review-text").value;

        if (bookName && reviewText && userRating > 0) {
            const reviewGrid = document.querySelector(".review-grid");
            const newReview = document.createElement("div");
            newReview.classList.add("predefined-review");

            newReview.innerHTML = `
                <div class="review-header">
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" class="reviewer-img" alt="Reviewer Image">
                    <div class="reviewer-info">
                        <h4>Your Name</h4>
                        <div class="review-stars">
                            ${[...Array(userRating)].map(() => `<span class="star selected">★</span>`).join('')}
                            ${[...Array(5 - userRating)].map(() => `<span class="star">★</span>`).join('')}
                        </div>
                        <p>Book: ${bookName}</p>
                    </div>
                </div>
                <div class="review-content">
                    ${reviewText}
                </div>
            `;

            reviewGrid.insertBefore(newReview, reviewGrid.firstChild);

            document.getElementById("book-name").value = '';
            document.getElementById("review-text").value = '';
            userReviewStars.forEach(star => {
                star.classList.remove("selected");
            });
        } else {
            alert("Please fill out all fields and select a rating.");
        }
    });

    const scrollUpBtn = document.getElementById('scrollUp=btn');
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
