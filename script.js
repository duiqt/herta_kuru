//varible
var audioList = [];  // will be loaded later

let firstSquish = true;
//end varible

//language support
const LANGUAGES = {
    "en": {
        audioList: [
            new Audio("audio/en/kuruto.mp3"),
            new Audio("audio/en/kuru1.mp3"),
            new Audio("audio/en/kuru2.mp3"),
        ],
        texts: {
            "page-title": "Welcome to herta kuru",
            "doc-title": "Kuru Kuru~",
            "page-descriptions": "The website for Herta, the <del>annoying</del> cutest genius Honkai: Star Rail character out there.",
            "counter-descriptions": "The kuru~ has been squished",
            "counter-unit": "times",
            "counter-button": "Squish the kuru~!",
            "credits-gif": "Herta gif made by",
            "footer-repository-text": "You can check out the GitHub repository here:",
            "footer-repository-text-2": "herta_kuru repo"
        }
    }, "cn": {
        audioList: [
            new Audio("audio/cn/gululu.mp3"),
            new Audio("audio/cn/gururu.mp3"),
            new Audio("audio/cn/转圈圈.mp3"),
            new Audio("audio/cn/转圈圈咯.mp3"),
        ],
        texts: {
            "page-title": "黑塔转圈圈~",
            "doc-title": "咕噜噜~",
            "page-descriptions": "给黑塔酱写的小网站，欸对，就是那个最<del>吵闹的</del>可爱的《崩坏：星穹铁道》角色！",
            "counter-descriptions": "黑塔已经咕噜~了",
            "counter-unit": "次",
            "counter-button": "转圈圈~",
            "credits-gif": "黑塔GIF作者：",
            "footer-repository-text": "源代码在此：",
            "footer-repository-text-2": "herta_kuru 仓库"
        }
    }
    // TODO Korean and Japanese (text&voice) support
};
var current_language = "en";
function reload_language() {
    let localTexts = LANGUAGES[current_language].texts;
    Object.entries(localTexts).forEach(([textId, value]) => {
        document.getElementById(textId).innerHTML = value;
    });
    for (const audio of LANGUAGES[current_language].audioList) {
        audio.preload = "auto";
        // TODO instead of requesting the files every time the button gets clicked, request all the audio files at once during preparation
    }
}
reload_language()
document.getElementById("language-selector").addEventListener("change", (ev) => {
    current_language = ev.target.value;
    reload_language();
    // TODO get the language selection stored in localStorage
});

function getLocalAudioList() {
    return LANGUAGES[current_language].audioList;
}
//end language support

const getTimePassed = () => Date.parse(new Date());

const globalCounter = document.querySelector('#global-counter');
const localCounter = document.querySelector('#local-counter');
let globalCount = 0;
let localCount = localStorage.getItem('count-v2') || 0;
// stores counts from clicks until 5 seconds have passed without a click
let heldCount = 0;

function getGlobalCount() {
    fetch('https://kuru-kuru-count-api.onrender.com/sync', { method: 'GET' })
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

function update(e, resetCount = true) {
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

function getRandomAudio(isFirstSquish = false) {
    var localAudioList = getLocalAudioList()
    if (current_language == "en" && isFirstSquish) {
        const randomIndex = Math.floor(Math.random() * 2) + 1; //kuruto audio only play once at first squish
        const randomItem = localAudioList[randomIndex];
        return randomItem;
    }
    const randomIndex = Math.floor(Math.random() * localAudioList.length);
    const randomItem = localAudioList[randomIndex];
    return randomItem;
}

function playKuru() {
    let audio;

    audio = getRandomAudio(firstSquish).cloneNode();
    firstSquish = false;

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

