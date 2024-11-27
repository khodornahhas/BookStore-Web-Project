document.addEventListener("DOMContentLoaded", () => {
    const cartCountElement = document.getElementById("cart-count");
    let cartCount = 0;

    const updateCartCount = () => {
        cartCountElement.textContent = cartCount;
    };

    const categoryLinks = document.querySelectorAll(".sidebar ul li");
    const bookSections = document.querySelectorAll(".category-section");

    categoryLinks.forEach(link => {
        link.addEventListener("click", () => {
            const selectedCategory = link.textContent.trim().toLowerCase();

            bookSections.forEach(section => {
                const sectionCategory = section.querySelector("h2").textContent.toLowerCase();

                if (sectionCategory.includes(selectedCategory) || selectedCategory === 'best sellers') {
                    section.style.display = "block";
                } else {
                    section.style.display = "none";
                }
            });
        });
    });

    bookSections.forEach(section => {
        section.style.display = "block";
    });

    const bookItems = document.querySelectorAll(".book-item");
    bookItems.forEach(item => {
        item.addEventListener("click", () => {
            cartCount++;
            updateCartCount();
        });
    });

    updateCartCount();

    let scrollUpBtn = document.getElementById('scrollUp=btn');
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