const $ = mdui.$;

//varible
var audioList = [];  // will be loaded later

let firstSquish = true;
//end varible

//language support
const LANGUAGES = {
    "_": { fallbackLanguage: "en" },
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
            "counter-descriptions": ["The kuru~ has been squished for", "Herta has been kuru~ed for"],
            "counter-unit": "times",
            "counter-button": ["Squish the kuru~!", "Kuru kuru~!"],
            "credits-gif": "Herta gif made by",
            "footer-repository-text": "GitHub Repo",
            "access-via-pages": "You're currently accessing via GitHub Pages. For users in China (Mainland) or some other regions, click <a href='https://herta.ft2.ltd/'>here to access the mirror on Netlify</a>. ",
            "access-via-mirror": "Congratulations! You are using a mirror site, which should speed up access within China (Mainland) and some regions. Click here to <a href='https://duiqt.github.io/herta_kuru/'>visit the source site on GitHub Pages</a>.",
            "footer-show-credits-text": "Show Credits"
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
            "footer-repository-text": "GitHub 仓库",
            "access-via-pages": "您目前是通过 GitHub Pages 访问。对于中国大陆或其他一些地区的用户，请<a href='https://herta.ft2.ltd/'>单击此处访问 Netlify 上的镜像</a>。",
            "access-via-mirror": "恭喜！你正在使用镜像站，这应当会加速在中国大陆及部分地区境内的访问。点此<a href='https://duiqt.github.io/herta_kuru/'>访问 GitHub Pages 上的源站</a>。",
            "footer-show-credits-text": "查看感谢页"
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
            "counter-descriptions": "全世界のクル再生数",
            "counter-unit": "回",
            "counter-button": "クル クル~!",
            "credits-gif": "GIF作成者は",
            "footer-repository-text": "こちらはこのページGitHubリポジトリ:",
            "access-via-pages": "今アクセスしてるページはぎGitHubです。中国大陸まだは他の地域のユーサーはNetlifyのミラーに入るために、<a href='https://herta.ft2.ltd/'>ここにクリックして</a>ください。",
            "access-via-mirror": "おめでとうございます！今はもうミラーサイトを使っています、中国大陸まだは他の地域のアクセス速度が速くなります。サイトのソースを見たいなら、<a href='https://duiqt.github.io/herta_kuru/'>ここにクリックして</a>、GitHubページで見てください。",
            "footer-show-credits-text": "Show Credits"
        },
        cardImage: "img/card_ja.jpg"
    },
    "kr": {
        audioList: [
            "audio/ja/kuruto.mp3",
            "audio/ja/kuru1.mp3",
            "audio/ja/kuru2.mp3",
        ],
        texts: {
            "page-title": "헤르타빙글 환영합니다~",
            "doc-title": "빙글 빙글~",
            "page-descriptions": "이 웹사이트는 헤르타를 위해 만들어졌습니다, 붕괴: 스타레일 의 <del>귀찮은</del> 귀여운 천재 ",
            "counter-descriptions": "전 세계 빙글 조회수",
            "counter-unit": "번",
            "counter-button": "빙글 빙글~!",
            "credits-gif": "gif의 제작자입니다",
            "footer-repository-text": "여기 github 리 포지 토리가 있습니다:",
            "access-via-pages": "당신은 GitHub를 통해 액세스하고 있습니다. 중국 또는 기타 지역 사용자의 경우 여기를 <a href='https://herta.ft2.ltd/'>클릭하여 Netlify의 미러 액세스하십시오</a>. ",
            "access-via-mirror": "축하합니다. 당신은 미러 웹 사이트를 통해 액세스하고 있습니다, 이렇게 하면 중국 및 일부 다른 지역에서의 액세스 속도가 빨라집니다. 여기를 <a href='https://duiqt.github.io/herta_kuru/'> 클릭하여 GitHub의 소스 페이지에 액세스하십시오</a>. ",
            "footer-show-credits-text": "Show Credits"
        },
        cardImage: "img/card_kr.jpg"
    },
    "id": {
        audioList: [
            "audio/ja/kuruto.mp3",
            "audio/ja/kuru1.mp3",
            "audio/ja/kuru2.mp3",
        ],
        texts: {
            "page-title": "Selamat datang di Herta kuru~",
            "doc-title": "Kuru Kuru~",
            "page-descriptions": "Situs web yang dipersembahkan kepada Herta, sang Karakter Jenius <del>ngeselin</del> dari Honkai: Star Rail.",
            "counter-descriptions": ["Kuru nya telah dipencet sebanyak", "Herta telah ter-kuru-kan sebanyak"],
            "counter-unit": "kali",
            "counter-button": ["Pencet kuru nya~!", "Kuru kuru~!"],
            "credits-gif": "Gif Herta dibuat oleh",
            "footer-repository-text": "Kamu dapat memeriksa repository Github nya di sini:",
            "footer-repository-text-2": "herta_kuru repo",
            "access-via-pages": "Kamu saat ini sedang mengakses melalui Laman GitHub. Untuk pengguna berdomisili di Tiongkok (Daratan) dan wilayah lainnya, silakan klik <a href='https://herta.ft2.ltd/'> di sini untuk mengakses mirror nya di Netlify</a>. ",
            "access-via-mirror": "Selamat! Kamu sedang menggunakan situs mirror, yang mana seharusnya mempercepat akses untuk wilayah sekitar Tiongkok (daratan) dan wilayah lainnya . Silakan klik <a href='https://duiqt.github.io/herta_kuru/'> di sini untuk mengunjungi situs sumbernya pada Laman Github</a>.",
            "footer-show-credits-text": "Tampilkan Credit"
        },
        cardImage: "img/card_id.jpg"
    }
};

var current_language = localStorage.getItem("lang") || "en";
if (current_language != "en") {
    document.getElementById("language-selector").value = current_language;
};

function getLocalText(textId, language = null, fallback = true) {
    let curLang = LANGUAGES[language || current_language];
    let localTexts = curLang.texts;
    if (localTexts[textId] != undefined) {
        let value = localTexts[textId];
        if (value instanceof Array) {
            return randomChoice(value);
        } else {
            return value;
        }
    }
    if (fallback) return getLocalText(textId, language = "en", fallback = false);
    else return null;
}

function multiLangMutation() {
    let curLang = LANGUAGES[current_language];
    let localTexts = curLang.texts;
    Object.entries(localTexts).forEach(([textId, value]) => {
        if (!(value instanceof Array))
            if (document.getElementById(textId) != undefined)
                document.getElementById(textId).innerHTML = value;
    });
    refreshDynamicTexts()
    document.getElementById("herta-card").src = curLang.cardImage;
};

multiLangMutation()
document.getElementById("language-selector").addEventListener("change", (ev) => {
    current_language = ev.target.value;
    localStorage.setItem("lang", ev.target.value);
    multiLangMutation();
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

function getGlobalCount() {
    // duration: in milliseconds, how long will it take to animate the numbers, in total.
    fetch('https://kuru-kuru-count-api.onrender.com/sync', { method: 'GET' })
        .then((response) => response.json())
        .then((data) => {
            globalCount = data.count;
            // animate counter starting from current value to the updated value
            const startingCount = parseInt(globalCounter.textContent.replace(/,/g, ''));
            (animateCounter = () => {
                const currentCount = parseInt(globalCounter.textContent.replace(/,/g, ''));
                const speed = 200;
                const step = (globalCount - startingCount) / speed;
                if (currentCount < globalCount) {
                    globalCounter.textContent = Math.ceil(currentCount + step).toLocaleString('en-US');
                    setTimeout(animateCounter, 1);
                } else {
                    // display actual number
                    globalCounter.textContent = globalCount.toLocaleString('en-US');
                }
            })();
        })
        .catch((err) => console.error(err));
};
// initialize counters
localCounter.textContent = localCount.toLocaleString('en-US');
getGlobalCount();

let prevTime = 0;
// update global count every 10 seconds when tab is visible
setInterval(() => {
    if (document.hasFocus() && getTimestamp() - prevTime >= 10000) {
        getGlobalCount();
        prevTime = getTimestamp();
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

function tryCacheUrl(origUrl) {
    // check if the object is already cached
    if (cachedObjects[origUrl]) {
        return cachedObjects[origUrl];
    } else {
        // start caching it
        setTimeout(() => {
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
        }, 1);
        return origUrl;
    }
};


tryCacheUrl("img/hertaa1.gif");
tryCacheUrl("img/hertaa2.gif");

function randomChoice(myArr) {
    const randomIndex = Math.floor(Math.random() * myArr.length);
    const randomItem = myArr[randomIndex];
    return randomItem;
};

function getRandomAudioUrl() {
    var localAudioList = getLocalAudioList()
    if (current_language == "en" || current_language == "ja" || current_language == "kr" || current_language == "id") {
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

    let audio = new Audio(tryCacheUrl(audioUrl));

    audio.play();

    audio.addEventListener("ended", function () {
        this.remove();
    });
};

function animateHerta() {
    let id = null;

    const random = Math.floor(Math.random() * 2) + 1;
    const elem = document.createElement("img");
    elem.src = tryCacheUrl(`img/hertaa${random}.gif`);
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
            if (document.getElementById(textId) != undefined)
                document.getElementById(textId).innerHTML = randomChoice(value);
    });
};

// CN mirror check
if (location.hostname == "herta.ft2.ltd" || location.hostname == "hertakuru.netlify.app") {
    document.getElementById("access-via-tip-parent").innerHTML = "<p id='access-via-mirror'>Congratulations! You are using a mirror site, which should speed up access within China (Mainland) and some regions. Click here to <a href='https://duiqt.github.io/herta_kuru/'>visit the source site on GitHub Pages</a>.</p>";
    multiLangMutation();
} else {
    document.getElementById("access-via-tip-parent").innerHTML = "<p id='access-via-pages'>You're currently accessing via GitHub Pages. For users in China (Mainland) or some regions, click <a href='https://duiqt.github.io/herta_kuru/'>here to access the mirror on Netlify</a>.</p>";
    multiLangMutation();
}

// document.getElementById("credits-dialog").style.display = "none";
// fetch("credits.json").then(response => response.json()).then((data) => {
//     for (let i = 0; i < data.contributors.length; i++) {
//         var current = data.contributors[i];
//         document.getElementById("credits-dialog").innerHTML += `<div class="credit"><img src="${current.icon}" class="credits-head-img" /><div class="credit-usr-info"><p></p></div></div>`;
//     }
// });
function showCredits() {
    fetch("credits.json").then(response => response.json()).then((data) => {
        var creditsHtmlContent = "";
        creditsHtmlContent += `<ul class="mdui-list">`;
        for (let i = 0; i < data.contributors.length; i++) {
            var current = data.contributors[i];
            let renderedName = current.username;
            if (current.name != undefined) {
                renderedName += " (" + current.name + ")";
            }
            creditsHtmlContent += `<li class="mdui-list-item mdui-ripple">
    <div class="mdui-list-item-avatar">
      <img src="${current.icon}"/>
    </div>
    <div class="mdui-list-item-content">
      <div class="mdui-list-item-title">${renderedName}</div>
      <div class="mdui-list-item-text mdui-list-item-one-line">
        <span class="mdui-text-color-theme-text">${current.thing}</span>
      </div>
    </div>
  </li>`;
        }
        creditsHtmlContent += `</ul>`;

        mdui.dialog({
            title: 'Credits',
            content: creditsHtmlContent,
            buttons: [
                {
                    text: '取消'
                },
                {
                    text: '确认',
                    onClick: function (inst) {
                        mdui.alert('点击确认按钮的回调');
                    }
                }
            ]
        });
    });
}

$("#show-credits-opt").on("click", e => showCredits())