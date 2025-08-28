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
const callHistory = document.getElementById('call-history-card');
const serviceTitles = document.getElementsByClassName('service-title');

for (let i = 0; i < serviceCalls.length; i++) {
    serviceCalls[i].addEventListener('click', function () {

        const name = serviceNames[i].innerText;
        const number = serviceNumbers[i].innerText;
        const serviceTitle = serviceTitles[i].innerText;

        let coins = parseInt(coinCount.innerText);

        if (coins < 20) {
            alert("Not enough coins! You need at least 20 coins to make a call.");
            return;
        }


        coins = coins - 20;
        coinCount.innerText = coins;


        const newCallCard = document.createElement("div");
        newCallCard.setAttribute("class", "flex justify-between items-center bg-[#FAFAFA] rounded-[8px] p-[14px] my-[30px]");

        const time = new Date().toLocaleTimeString();

        newCallCard.innerHTML = `
            <div>
                <h3 class="font-semibold text-[14px]">${serviceTitle}</h3>
                <h2 class="text-1xl mb-1">${number}</h2>
            </div>
            <h1 class="text-[12px]">${time}</h1>
        `;


        callHistory.appendChild(newCallCard);

        alert("📞 Calling " + name + "  " + number);
    });
}

// code for call history clear

const historyClearBtn = document.getElementById('clear-btn')
    .addEventListener('click', function () {
        const callHistory = document.getElementById('call-history-card');
        callHistory.innerHTML = "";
    })

// code for copy button


const copy = document.getElementById('copy-numbers');
const copyButtons = document.getElementsByClassName('copy-btn');
let copyCount = 0;


for (let i = 0; i < copyButtons.length; i++) {
    copyButtons[i].addEventListener('click', function () {
        copyCount++;
        copy.textContent = copyCount;


        const number = serviceNumbers[i].innerText;

        navigator.clipboard.writeText(number);

        alert(`Copied: ${number}`);
    });
}




