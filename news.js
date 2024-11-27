let newsGrid = document.querySelector('.news-grid');
let leftArrow = document.querySelector('.left-arrow');
let rightArrow = document.querySelector('.right-arrow');

leftArrow.addEventListener('click', () => {
    newsGrid.scrollBy({ left: -600, behavior: 'smooth' });
});

rightArrow.addEventListener('click',() => {
    newsGrid.scrollBy({ left: 600, behavior: 'smooth' });
});