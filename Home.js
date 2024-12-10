const images = ["imgs/add2.jpg", "imgs/addpic.jpg", "imgs/adds.jpg"];
let currentImageIndex = 0;
let sliderImage = document.getElementById("image-slider");

function changeImage() {
 
  sliderImage.style.opacity = 0;
  setTimeout(() => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    sliderImage.src = images[currentImageIndex];
    sliderImage.style.opacity = 1;
  }, 800); 
}
setInterval(changeImage, 4800);
sliderImage.src = images[currentImageIndex];


let scrollUpBtn = document.getElementById('scrollUp=btn');
scrollUpBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});