// code for heart
const heartIcon = document.getElementById('heart-icon');
const hearts = document.getElementsByClassName('hearts');
let heartCount = 0;
for (const heart of hearts) {
    heart.addEventListener('click', function () {
        heartCount++;

        heartIcon.textContent = heartCount;
    })


}