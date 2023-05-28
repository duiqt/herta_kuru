//varible
var audioList = [];  // will be loaded later

let firstSquish = true;
//end varible

//language support
const LANGUAGES = {
    "en": {
        audioList: [
            "audio/ja/kuruto.mp3",
            "audio/ja/kuru1.mp3",
            "audio/ja/kuru2.mp3",
        ],
        texts: {
            "page-title": "Welcome to herta kuru~",
            "doc-title": "Kuru Kuru~",
            "page-descriptions": "The website for Herta, the <del>annoying</del> cutest genius Honkai: Star Rail character out there.",
            //dynamic texts
            "counter-descriptions": ["The kuru~ has been squished for", "Herta has been kuru~ed for"],
            "counter-unit": "times",
            "counter-button": ["Squish the kuru~!", "Kuru kuru~!"],
            "credits-gif": "Herta gif made by",
            "footer-repository-text": "You can check out the GitHub repository here:",
            "footer-repository-text-2": "herta_kuru repo"
        },
        cardImage: "img/card_en.jpg"
    }, "cn": {
        audioList: [
            "audio/cn/gululu.mp3",
            "audio/cn/gururu.mp3",
            "audio/cn/转圈圈.mp3",
            "audio/cn/转圈圈咯.mp3",
        ],
        texts: {
            "page-title": "黑塔转圈圈",
            "doc-title": "咕噜噜~",
            "page-descriptions": "给黑塔酱写的小网站，对，就是那个<del>烦人的</del>最可爱的《崩坏：星穹铁道》角色！",
            "counter-descriptions": ["黑塔已经咕噜噜~了", "黑塔已经转了"],
            "counter-unit": ["次", "次圈圈"],
            "counter-button": ["转圈圈~", "咕噜噜！"],
            "credits-gif": "黑塔GIF作者：",
            "footer-repository-text": "源代码在此：",
            "footer-repository-text-2": "herta_kuru 仓库"
        },
        cardImage: "img/card_cn.jpg"
    },
    "ja": {
        audioList: [
            "audio/ja/kuruto.mp3",
            "audio/ja/kuru1.mp3",
            "audio/ja/kuru2.mp3",
        ],
        texts: {
            "page-title": "ヘルタクルへようこそ~",
            "doc-title": "クル クル~",
            "page-descriptions": "このサイトはヘルタのために作られた、 あの崩壊：スターレイルの <del>悩ましい</del> かわいい天才キャラー。",
            // TODO dynamic texts for Japanese
            "counter-descriptions": "全世界のクル再生数",
            "counter-unit": "回",
            "counter-button": "クル クル~!",
            "credits-gif": "GIF作成者は",
            "footer-repository-text": "こちらはこのページGitHubリポジトリ:",
            "footer-repository-text-2": "herta_kuru リポジトリ"
        },
        cardImage: "img/card_ja.jpg"
    },
    "kr": {
        audioList: [
            "audio/kr/kuruto.mp3",
            "audio/kr/kuru1.mp3",
            "audio/kr/kuru2.mp3",
        ], 
        texts: {
            "page-title": "헤르타빙글 환영합니다~",
            "doc-title": "빙글 빙글~",
            "page-descriptions": "이 웹사이트는 헤르타를 위해 만들어졌습니다, 붕괴: 스타레일 의 <del>귀찮은</del> 귀여운 천재 ",
            // TODO dynamic texts for Korean
            "counter-descriptions": "전 세계 빙글 조회수",
            "counter-unit": "번",
            "counter-button": "빙글 빙글~!",
            "credits-gif": "gif의 제작자입니다",
            "footer-repository-text": "여기 github 리 포지 토리가 있습니다:",
            "footer-repository-text-2": "herta_kuru 리 포지 토리"
        },
        cardImage: "img/card_kr.jpg"
    }
};

var current_language = localStorage.getItem("lang") || "en";
if (current_language != "en") {
    document.getElementById("language-selector").value = current_language;
};

function reload_language() {
    let curLang = LANGUAGES[current_language];
    let localTexts = curLang.texts;
    Object.entries(localTexts).forEach(([textId, value]) => {
        if (!(value instanceof Array))
            document.getElementById(textId).innerHTML = value;
    });
    refreshDynamicTexts()
    document.getElementById("herta-card").src = curLang.cardImage;
};

reload_language()
document.getElementById("language-selector").addEventListener("change", (ev) => {
    current_language = ev.target.value;
    localStorage.setItem("lang", ev.target.value);
    reload_language();
});

function getLocalAudioList() {
    return LANGUAGES[current_language].audioList;
};
//end language support

const getTimestamp = () => Date.parse(new Date());

const globalCounter = document.querySelector('#global-counter');
const localCounter = document.querySelector('#local-counter');
let globalCount = 0;
let localCount = localStorage.getItem('count-v2') || 0;
// stores counts from clicks until 5 seconds have passed without a click
let heldCount = 0;

function getGlobalCount(duration = null, callback = null) {
    // duration: in milliseconds, how long will it take to animate the numbers, in total.
    fetch('https://kuru-kuru-count-api.onrender.com/sync', { method: 'GET' })
        .then((response) => response.json())
        .then((data) => {
            globalCount = data.count;
            // animate counter starting from current value to the updated value
            const startingCount = parseInt(globalCounter.textContent.replace(/,/g, ''));
            (animateCounter = () => {
                const k = 5;
                var currentCount = parseInt(globalCounter.textContent.replace(/,/g, ''));
                const step = (globalCount - startingCount) * 1.0 / (duration || 200) * k;  // how many numbers it'll fly through, in 1ms
                console.log(duration, step)
                if (currentCount < globalCount) {
                    currentCount += step;
                    globalCounter.textContent = Math.ceil(currentCount).toLocaleString('en-US');
                    setTimeout(animateCounter, k);
                } else {
                    globalCounter.textContent = globalCount.toLocaleString('en-US');
                    if (callback != null) {
                        callback();
                    }
                }
            })();
        })
        .catch((err) => console.error(err));
};
// initialize counters
localCounter.textContent = localCount.toLocaleString('en-US');

let prevTime = 0;
// update global count every 10 seconds when tab is visible
const UPDATE_INTERVAL = 10000;
function updateGlobalCount(first = false) {
    if ((getTimestamp() - prevTime > UPDATE_INTERVAL) || first) {
        getGlobalCount(first ? 200 : UPDATE_INTERVAL, () => {
            updateGlobalCount();
        });
    } else {
        setTimeout(updateGlobalCount, 1000);  // check it 1sec later
    }
};

updateGlobalCount(true);

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
};

let timer;

//counter button
const counterButton = document.querySelector('#counter-button');
counterButton.addEventListener('click', (e) => {
    prevTime = getTimestamp();

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
    refreshDynamicTexts();
});

var cachedObjects = {};

function tryCachedObject(origUrl) {
    // check if the object is already cached
    if (cachedObjects[origUrl]) {
        return cachedObjects[origUrl];
    } else {
        // start caching it
        fetch(origUrl)
            .then((response) => response.blob())
            .then((blob) => {
                // Create a blob URL for the object
                const blobUrl = URL.createObjectURL(blob);
                // get the object cached by storing the blob URL in the cachedObjects object
                cachedObjects[origUrl] = blobUrl;
            })
            .catch((error) => {
                console.error(`Error caching object from ${origUrl}: ${error}`);
            });
        return origUrl;
    }
};

function randomChoice(myArr) {
    const randomIndex = Math.floor(Math.random() * myArr.length);
    const randomItem = myArr[randomIndex];
    return randomItem;
};

function getRandomAudioUrl() {
    var localAudioList = getLocalAudioList()
    if (current_language == "en" || current_language == "ja" || current_language == "kr") {
        const randomIndex = Math.floor(Math.random() * 2) + 1; //kuruto audio only play once at first squish
        const randomItem = localAudioList[randomIndex];
        return randomItem;
    }
    const randomIndex = Math.floor(Math.random() * localAudioList.length);
    const randomItem = localAudioList[randomIndex];
    return randomItem;
};

function playKuru() {
    let audioUrl;

    if (firstSquish) {
        firstSquish = false;
        audioUrl = getLocalAudioList()[0]; //get kuruto audio at first squish, then never again
    } else {
        audioUrl = getRandomAudioUrl();
    }

    let audio = new Audio(tryCachedObject(audioUrl));

    audio.play();

    audio.addEventListener("ended", function () {
        this.remove();
    });
};

function animateHerta() {
    let id = null;

    const random = Math.floor(Math.random() * 2) + 1;
    const elem = document.createElement("img");
    elem.src = `img/hertaa${random}.gif`;
    elem.style.position = "absolute";
    elem.style.right = "-500px";
    elem.style.top = counterButton.getClientRects()[0].bottom + scrollY - 430 + "px"
    elem.style.zIndex = "-10";
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
};

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
};
//end counter button

function refreshDynamicTexts() {
    let curLang = LANGUAGES[current_language];
    let localTexts = curLang.texts;
    Object.entries(localTexts).forEach(([textId, value]) => {
        if (value instanceof Array)
            document.getElementById(textId).innerHTML = randomChoice(value);
    });
};