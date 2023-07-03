async function convertMp3FilesToBase64(dict) {
    const promises = [];
    for (const lang in dict) {
        if (dict.hasOwnProperty(lang)) {
            const audioList = dict[lang].audioList;
            if (Array.isArray(audioList)) {
                for (let i = 0; i < audioList.length; i++) {
                    const url = audioList[i];
                    if (typeof url === "string" && url.endsWith(".mp3")) {
                        promises.push(loadAndEncode("static/" + url).then(result => dict[lang].audioList[i] = result));
                    }
                }
            }
        }
    }
    await Promise.all(promises);
    return dict;
}

function loadAndEncode(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.responseType = "arraybuffer";
        xhr.onload = function () {
            if (xhr.status === 200) {
                const buffer = xhr.response;
                const blob = new Blob([buffer], { type: "audio/mpeg" });
                const reader = new FileReader();
                reader.readAsDataURL(blob);
                reader.onloadend = function () {
                    const base64data = reader.result;
                    resolve(base64data);
                }
            } else {
                reject(xhr.statusText);
            }
        };
        xhr.onerror = function () {
            reject(xhr.statusText);
        };
        xhr.send();
    });
}

window.onload = function () {
    // Calling method
    convertMp3FilesToBase64(LANGUAGES).then(() => {
        // show counter-button
        document.getElementById('counter-button').style.visibility = 'visible';
        // Other operations on dict or passed to other functions for processing
    }).catch(error => {
        console.error(error);
    });
}