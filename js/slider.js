let carousel_inner = document.querySelector('.carousel-inner');
let carousel_items = document.querySelectorAll('.carousel-item');
let currentIndex = 0;
setInterval(() => {
    carousel_items.forEach(item => item.classList.remove('active'));
    carousel_items[currentIndex].classList.add('active');
    if (currentIndex + 1 >= carousel_items.length) {
        currentIndex = 0;
    } else {
        currentIndex += 1;
    }
}, 1700);