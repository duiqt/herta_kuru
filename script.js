//varible
const audioList = [
    new Audio("audio/kuruto.mp3"),
    new Audio("audio/kuru1.mp3"),
    new Audio("audio/kuru2.mp3"),
];

for (const audio of audioList) {
    audio.preload = "auto";
}

let firstSquish = true;
//end varible

const getTimePassed = () => Date.parse(new Date());

const globalCounter = document.querySelector('#global-counter');
const localCounter = document.querySelector('#local-counter');
let globalCount = 0;
let localCount = localStorage.getItem('count-v2') || 0;
// stores counts from clicks until 5 seconds have passed without a click
let heldCount = 0;

function getGlobalCount() {
    fetch('https://kuru-kuru-count-api.onrender.com/sync', { method: 'GET'})
        .then((response) => response.json())
        .then((data) => {
            globalCount = data.count;
            // animate counter starting from current value to the updated value
            const startingCount = parseInt(globalCounter.textContent.replace(/,/g, ''));
            (animateCounter = () => {
                const currentCount = parseInt(globalCounter.textContent.replace(/,/g, ''));
                const time = (globalCount - startingCount) / 200; // speed
                if (currentCount < globalCount) {
                    globalCounter.textContent = Math.ceil(currentCount + time).toLocaleString('en-US');
                    setTimeout(animateCounter, 1);
                } else {
                    globalCounter.textContent = globalCount.toLocaleString('en-US');
                }
            })()
        })
        .catch((err) => console.error(err));
}
// initialize counters
localCounter.textContent = localCount.toLocaleString('en-US');
getGlobalCount();

let prevTime = 0;
// update global count every 10 seconds when tab is visible
setInterval(() => {
    if (document.hasFocus() && getTimePassed() - prevTime > 10000) {
        getGlobalCount();
        prevTime = getTimePassed();
    }
}, 10000);

function update(e, resetCount=true) {
    // update global count
    const data = {
        count: heldCount,
        e: e // check if request is triggered by event
    };

    fetch('https://kuru-kuru-count-api.onrender.com/update', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(() => {
            // update local count
            localStorage.setItem('count-v2', localCount);
            if (resetCount) heldCount = 0;
        })
        .catch((err) => console.error(err));
}

let timer;
//counter button
const counterButton = document.querySelector('#counter-button');
counterButton.addEventListener('click', (e) => {
    prevTime = getTimePassed();

    heldCount++;
    localCount++;
    globalCount++;

    if (heldCount === 10) {
        // update on 10 counts
        update(e, false);
        heldCount -= 10;
    } else {
        // update 5 seconds after last click
        clearTimeout(timer);
        timer = setTimeout(() => update(e), 5000);
    }

    localCounter.textContent = localCount.toLocaleString('en-US');
    globalCounter.textContent = globalCount.toLocaleString('en-US');

    triggerRipple(e);

    playKuru();
    animateHerta();
});

function playKuru() {
    let audio;

    if (firstSquish) {
        firstSquish = false;
        audio = audioList[0].cloneNode();
    } else {
        const random = Math.floor(Math.random() * 2) + 1;
        audio = audioList[random].cloneNode();
    }

    audio.play();

    audio.addEventListener("ended", function () {
        this.remove();
    });
}

function animateHerta() {
    let id = null;

    const random = Math.floor(Math.random() * 2) + 1;
    const elem = document.createElement("img");
    elem.src = `img/hertaa${random}.gif`;
    elem.style.position = "absolute";
    elem.style.right = "-500px";
    elem.style.top = counterButton.getClientRects()[0].bottom + scrollY - 430 + "px"
    elem.style.zIndex = "-1";
    document.body.appendChild(elem);

    let pos = -500;
    const limit = window.innerWidth + 500;
    clearInterval(id);
    id = setInterval(() => {
        if (pos >= limit) {
            clearInterval(id);
            elem.remove()
        } else {
            pos += 20;
            elem.style.right = pos + 'px';
        }
    }, 12);
}

function triggerRipple(e) {
    let ripple = document.createElement("span");
        
    ripple.classList.add("ripple");

    const counter_button = document.getElementById("counter-button");
    counter_button.appendChild(ripple);

    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    setTimeout(() => {
        ripple.remove();
    }, 300);
}
//end counter button