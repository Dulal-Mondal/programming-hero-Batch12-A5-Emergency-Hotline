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

// code for call;

const serviceCalls = document.getElementsByClassName('call-btn');
const serviceNames = document.getElementsByClassName('service-name');
const serviceNumbers = document.getElementsByClassName('service-number');
const coinCount = document.getElementById('coins');

for (let i = 0; i < serviceCalls.length; i++) {
    serviceCalls[i].addEventListener('click', function () {

        const name = serviceNames[i].innerText;
        const number = serviceNumbers[i].innerText;


        let coins = parseInt(coinCount.innerText);


        if (coins < 20) {
            alert("Not enough coins! You need at least 20 coins to make a call.");
            return;
        }
        coins = coins - 20;
        coinCount.innerText = coins;

        alert("Calling " + name + "  " + number);
    });
}
