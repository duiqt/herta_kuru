const LANGUAGES = {
    "_": { defaultLanguage: "en", defaultVOLanguage: "ja" },
    "en": {
        audioList: null,
        texts: {
            "page-title": "Welcome to herta kuru~",
            "doc-title": "Kuru Kuru~",
            "page-descriptions": "The website for Herta, the <del>annoying</del> cutest genius Honkai: Star Rail character out there.",
            "counter-descriptions": ["The kuru~ has been squished for", "Herta has been kuru~ed for"],
            "counter-unit": "times",
            "counter-button": ["Squish the kuru~!", "Kuru kuru~!"],
            "access-via-pages": "You're currently accessing via GitHub Pages. For users in China (Mainland) or some other regions, click <a href='https://herta.ft2.ltd/'>here to access the mirror on Netlify</a>. ",
            "access-via-mirror": "Congratulations! You are using a mirror site, which should speed up access within China (Mainland) and some regions. Click here to <a href='https://duiqt.github.io/herta_kuru/'>visit the source site on GitHub Pages</a>.",
            "show-credits-text": "Show Credits",
            "repository-desc": "GitHub Repo",
            "options-txt-vo-lang": "Voice-Over Language",
            "options-txt-lang": "Page Language",
            "dialogs-close": "Close",
            "dialogs-credits-title": "Credits"
        },
        cardImage: "img/card_en.jpg"
    }, "cn": {
        audioList: [
            // TODO audio random weight
            "audio/cn/gululu.mp3",
            "audio/cn/gururu.mp3",
            "audio/cn/转圈圈.mp3",
            "audio/cn/转圈圈咯.mp3",
            "audio/cn/要坏掉了.mp3"
        ],
        texts: {
            "page-title": "黑塔转圈圈",
            "doc-title": "咕噜噜~",
            "page-descriptions": "给黑塔酱写的小网站，对，就是那个<del>烦人的</del>最可爱的《崩坏：星穹铁道》角色！",
            "counter-descriptions": ["黑塔已经咕噜噜~了", "黑塔已经转了"],
            "counter-unit": ["次", "次圈圈"],
            "counter-button": ["转圈圈~", "咕噜噜！"],
            "access-via-pages": "您目前是通过 GitHub Pages 访问。对于中国大陆或其他一些地区的用户，请<a href='https://herta.ft2.ltd/'>单击此处访问 Netlify 上的镜像</a>。",
            "access-via-mirror": "恭喜！你正在使用镜像站，这应当会加速在中国大陆及部分地区境内的访问。点此<a href='https://duiqt.github.io/herta_kuru/'>访问 GitHub Pages 上的源站</a>。",
            "show-credits-text": "查看感谢页",
            "repository-desc": "GitHub 仓库",
            "options-txt-vo-lang": "语音语言",
            "options-txt-lang": "界面语言",
            "dialogs-close": "关闭",
            "dialogs-credits-title": "制作人员名单"
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
            "access-via-pages": "今アクセスしてるページはぎGitHubです。中国大陸まだは他の地域のユーサーはNetlifyのミラーに入るために、<a href='https://herta.ft2.ltd/'>ここにクリックして</a>ください。",
            "access-via-mirror": "おめでとうございます！今はもうミラーサイトを使っています、中国大陸まだは他の地域のアクセス速度が速くなります。サイトのソースを見たいなら、<a href='https://duiqt.github.io/herta_kuru/'>ここにクリックして</a>、GitHubページで見てください。",
            "show-credits-text": "Show Credits",
            "repository-desc": "GitHub Repo",
            "options-txt-vo-lang": "Voice-Over Language",
            "options-txt-lang": "Page Language",
            "dialogs-close": "Close",
            "dialogs-credits-title": "Credits"
        },
        cardImage: "img/card_ja.jpg"
    },
    "kr": {
        audioList: null,
        texts: {
            "page-title": "헤르타빙글 환영합니다~",
            "doc-title": "빙글 빙글~",
            "page-descriptions": "이 웹사이트는 헤르타를 위해 만들어졌습니다, 붕괴: 스타레일 의 <del>귀찮은</del> 귀여운 천재 ",
            "counter-descriptions": "전 세계 빙글 조회수",
            "counter-unit": "번",
            "counter-button": "빙글 빙글~!",
            "access-via-pages": "당신은 GitHub를 통해 액세스하고 있습니다. 중국 또는 기타 지역 사용자의 경우 여기를 <a href='https://herta.ft2.ltd/'>클릭하여 Netlify의 미러 액세스하십시오</a>. ",
            "access-via-mirror": "축하합니다. 당신은 미러 웹 사이트를 통해 액세스하고 있습니다, 이렇게 하면 중국 및 일부 다른 지역에서의 액세스 속도가 빨라집니다. 여기를 <a href='https://duiqt.github.io/herta_kuru/'> 클릭하여 GitHub의 소스 페이지에 액세스하십시오</a>. ",
            "show-credits-text": "Show Credits",
            "repository-desc": "GitHub Repo",
            "options-txt-vo-lang": "Voice-Over Language",
            "options-txt-lang": "Page Language",
            "dialogs-close": "Close",
            "dialogs-credits-title": "Credits"
        },
        cardImage: "img/card_kr.jpg"
    },
    "id": {
        audioList: null,
        texts: {
            "page-title": "Selamat datang di Herta kuru~",
            "doc-title": "Kuru Kuru~",
            "page-descriptions": "Situs web yang dipersembahkan kepada Herta, sang Karakter Jenius <del>ngeselin</del> dari Honkai: Star Rail.",
            "counter-descriptions": ["Kuru nya telah dipencet sebanyak", "Herta telah ter-kuru-kan sebanyak"],
            "counter-unit": "kali",
            "counter-button": ["Pencet kuru nya~!", "Kuru kuru~!"],
            "access-via-pages": "Kamu saat ini sedang mengakses melalui Laman GitHub. Untuk pengguna berdomisili di Tiongkok (Daratan) dan wilayah lainnya, silakan klik <a href='https://herta.ft2.ltd/'> di sini untuk mengakses mirror nya di Netlify</a>. ",
            "access-via-mirror": "Selamat! Kamu sedang menggunakan situs mirror, yang mana seharusnya mempercepat akses untuk wilayah sekitar Tiongkok (daratan) dan wilayah lainnya . Silakan klik <a href='https://duiqt.github.io/herta_kuru/'> di sini untuk mengunjungi situs sumbernya pada Laman Github</a>.",
            "show-credits-text": "Tampilkan Credit",
            "repository-desc": "GitHub Repo",
            "options-txt-vo-lang": "Voice-Over Language",
            "options-txt-lang": "Page Language",
            "dialogs-close": "Close",
            "dialogs-credits-title": "Credits"
        },
        cardImage: "img/card_id.jpg"
    },
    "pt": {
        audioList: null,
        texts: {
            "page-title": "Bem-vindo ao kuru~ da herta",
            "doc-title": "Kuru Kuru~",
            "page-descriptions": "O site para a Herta, a personagem mais <del>irritante</del> fofa e gênia do Honkai: Star Rail que existe.",
            "counter-descriptions": ["O kuru~ já  foi clicado", "Herta ja falou kuru~ "],
            "counter-unit": "vezes",
            "counter-button": "Kuru kuru~!",
            "access-via-pages": "No momento, você está acessando por meio do GitHub Pages. Para usuários na China (continente) ou algumas regiões, clique <a href='https://herta.ft2.ltd/'>aqui pode acessar via Netlify</a>. ",
            "access-via-mirror": "Parabéns! Você está usando um site espelho, o que deve acelerar o acesso na China (continente) e algumas regiões. Clique aqui para <a href='https://duiqt.github.io/herta_kuru/'>visitar o site de origem no GitHub Pages</a>.",
            "show-credits-text": "Mostrar Créditos",
            "repository-desc": "GitHub Repo",
            "options-txt-vo-lang": "Idioma da voz",
            "options-txt-lang": "Idioma da página",
            "dialogs-close": "Fechar",
            "dialogs-credits-title": "Créditos"
        },
        cardImage: "img/card_pt.jpg"
    },
};

(() => {
    const $ = mdui.$;

    // initialize cachedObjects variable to store cached object URLs
    var cachedObjects = {};

    // function to try caching an object URL and return it if present in cache or else fetch it and cache it
    function cacheStaticObj(origUrl) {
        if (cachedObjects[origUrl]) {
            return cachedObjects[origUrl];
        } else {
            setTimeout(() => {
                fetch("static/" + origUrl)
                    .then((response) => response.blob())
                    .then((blob) => {
                        const blobUrl = URL.createObjectURL(blob);
                        cachedObjects[origUrl] = blobUrl;
                    })
                    .catch((error) => {
                        console.error(`Error caching object from ${origUrl}: ${error}`);
                    });
            }, 1);
            return origUrl;
        }
    };

    let firstSquish = true;

    // This code tries to retrieve the saved language 'lang' from localStorage. If it is not found or if its value is null, then it defaults to "en". 
    var current_language = localStorage.getItem("lang") || LANGUAGES._.defaultLanguage;
    var current_vo_language = localStorage.getItem("volang") || LANGUAGES._.defaultVOLanguage;

    // function that takes a textId, optional language and whether to use fallback/ default language for translation. It returns the translated text in the given language or if it cannot find the translation, in the default fallback language.
    function getLocalText(textId, language = null, fallback = true) {
        let curLang = LANGUAGES[language || current_language];
        let localTexts = curLang.texts;
        if (localTexts[textId] != undefined) {
            let value = localTexts[textId];
            if (value instanceof Array) {
                return randomChoice(value); // if there are multiple translations available for this text id, it randomly selects one of them and returns it.
            } else {
                return value;
            }
        }
        if (fallback) return getLocalText(textId, language = "en", fallback = false);
        else return null;
    }

    // function that updates all the relevant text elements with the translations in the chosen language.
    function multiLangMutation() {
        let curLang = LANGUAGES[current_language];
        let localTexts = curLang.texts;
        Object.entries(localTexts).forEach(([textId, value]) => {
            if (!(value instanceof Array))
                if (document.getElementById(textId) != undefined)
                    document.getElementById(textId).innerHTML = value; // replaces the innerHTML of the element with the given textId with its translated version.
        });
        refreshDynamicTexts()
        document.getElementById("herta-card").src = "static/" + curLang.cardImage; // sets the image of element with id "herta-card" to the translated version in the selected language.
    };

    multiLangMutation() // the function multiLangMutation is called initially when the page loads.

    // function that returns the list of audio files for the selected language
    function getLocalAudioList() {
        return LANGUAGES[current_vo_language].audioList;
    }

    // get global counter element and initialize its respective counts
    const localCounter = document.querySelector('#local-counter');
    let localCount = localStorage.getItem('count-v2') || 0;

    // display counter
    localCounter.textContent = localCount.toLocaleString('en-US');

    // initialize timer variable and add event listener to the counter button element
    const counterButton = document.querySelector('#counter-button');
    counterButton.addEventListener('click', (e) => {
        localCount++;

        localCounter.textContent = localCount.toLocaleString('en-US');

        triggerRipple(e);

        playKuru();
        animateHerta();
        refreshDynamicTexts();
    });

    // try caching the hertaa1.gif and hertaa2.gif images by calling the tryCacheUrl function
    cacheStaticObj("img/hertaa1.gif");
    cacheStaticObj("img/hertaa2.gif");

    // Define a function that takes an array as an argument and returns a random item from the array
    function randomChoice(myArr) {
        const randomIndex = Math.floor(Math.random() * myArr.length);
        const randomItem = myArr[randomIndex];
        return randomItem;
    }

    // Define a function that shuffles the items in an array randomly using Fisher-Yates algorithm
    function randomShuffle(myArr) {
        for (let i = myArr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [myArr[i], myArr[j]] = [myArr[j], myArr[i]];
        }
        return myArr;
    }


    function getRandomAudioUrl() {
        var localAudioList = getLocalAudioList();
        if (current_vo_language == "ja") {
            const randomIndex = Math.floor(Math.random() * 2) + 1;
            return localAudioList[randomIndex];
        }
        const randomIndex = Math.floor(Math.random() * localAudioList.length);
        return localAudioList[randomIndex];
    }

    function playKuru() {
        let audioUrl;
        if (firstSquish) {
            firstSquish = false;
            audioUrl = getLocalAudioList()[0];
        } else {
            audioUrl = getRandomAudioUrl();
        }
        let audio = new Audio(cacheStaticObj(audioUrl));
        audio.play();
        audio.addEventListener("ended", function () {
            this.remove();
        });
    }

    function animateHerta() {
        let id = null;
        const random = Math.floor(Math.random() * 2) + 1;
        const elem = document.createElement("img");
        elem.src = cacheStaticObj(`img/hertaa${random}.gif`);
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



    // This function creates ripples on a button click and removes it after 300ms.
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

    // This function retrieves localized dynamic text based on a given language code, and randomly replaces an element with one of the translations. 
    function refreshDynamicTexts() {
        let curLang = LANGUAGES[current_language];
        let localTexts = curLang.texts;
        Object.entries(localTexts).forEach(([textId, value]) => {
            if (value instanceof Array)
                if (document.getElementById(textId) != undefined)
                    document.getElementById(textId).innerHTML = randomChoice(value);
        });
    };

    // This block dynamically displays different messages depending on which hostname the website is being loaded from.
    if (location.hostname == "herta.ft2.ltd" || location.hostname == "hertakuru.netlify.app") {
        document.getElementById("access-via-tip-parent").innerHTML = "<p id='access-via-mirror'>Congratulations! You are using a mirror site, which should speed up access within China (Mainland) and some regions. Click here to <a href='https://duiqt.github.io/herta_kuru/'>visit the source site on GitHub Pages</a>.</p>";
        multiLangMutation();
    } else {
        document.getElementById("access-via-tip-parent").innerHTML = "<p id='access-via-pages'>You're currently accessing via GitHub Pages. For users in China (Mainland) or some regions, click <a href='https://duiqt.github.io/herta_kuru/'>here to access the mirror on Netlify</a>.</p>";
        multiLangMutation();
    }

    // This function fetches data stored in a JSON file and displays it in a dialog box.
    function showCredits() {
        fetch("credits.json").then(response => response.json()).then((data) => {
            var contributors = data.contributors;
            contributors = randomShuffle(contributors);
            var creditsHtmlContent = `<p>in no specific order</p>`;
            creditsHtmlContent += `<ul class="mdui-list">`;
            for (let i = 0; i < contributors.length; i++) {
                var current = contributors[i];
                let renderedName = current.username;
                if (current.name != undefined) {
                    renderedName += " (" + current.name + ")";
                }
                creditsHtmlContent += `<li class="mdui-list-item mdui-ripple">
    <div class="mdui-list-item-avatar mdlist-ava-fix">
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
                title: getLocalText("dialogs-credits-title"),
                content: creditsHtmlContent,
                buttons: [
                    {
                        text: getLocalText("dialogs-close")
                    }
                ],
                history: false
            });
        });
    }

    $("#show-credits-opt").on("click", e => showCredits())

    function showOptions() {
        mdui.dialog({
            title: 'Options',
            content: `<div style="min-height: 350px;" class="mdui-typo">
    <label id="options-txt-lang">Page Language</label>
    <select id="language-selector" class="mdui-select" mdui-select='{"position": "bottom"}'>
        <option value="en">English</option>
        <option value="cn">中文</option>
        <option value="ja">日本語</option>
        <option value="kr">한국어</option>
        <option value="id">Bahasa Indonesia</option>
        <option value="pt">Português-BR</option>
    </select>
    <br />
    <label id="options-txt-vo-lang">Voice-Over Language</label>
    <select id="vo-language-selector" class="mdui-select" mdui-select='{"position": "bottom"}'>
        <option value="ja">日本語</option>
        <option value="cn">中文</option>
    </select>
</div>`,
            buttons: [
                {
                    text: getLocalText("dialogs-close")
                }
            ],
            history: false,
            onOpen: (inst) => {
                $("#vo-language-selector").val(current_vo_language);
                $("#language-selector").val(current_language);

                $("#language-selector").on("change", (ev) => {
                    current_language = ev.target.value;
                    localStorage.setItem("lang", ev.target.value);
                    multiLangMutation();
                });

                $("#vo-language-selector").on("change", (ev) => {
                    current_vo_language = ev.target.value;
                    localStorage.setItem("volang", ev.target.value);
                });

                multiLangMutation();
                mdui.mutation();
            }
        });
    }

    $("#show-options-opt").on("click", e => showOptions())
})(); 
