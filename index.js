window.addEventListener("load" , function() {
    const section = this.document.querySelector("section");
    const searchContainer = section.querySelector(".search-container");

    const inputBox = searchContainer.querySelector("input");
    const shortenButton = searchContainer.querySelector("button");
    const urlList = searchContainer.querySelector(".url-list");

    inputBox.addEventListener("keydown" , (event) => {
        if(event.key === 'Enter') {
            event.preventDefault();
            shorten();
        }
    });

    shortenButton.addEventListener("click" , () => {
        shorten();
    });

    function shorten() {
        const proxyUrl = "https://corsproxy.io/?" + 'https://cleanuri.com/api/v1/shorten';

        const url = inputBox.value;

        const encoded = encodeURIComponent(url);
        const body = "url=" + encoded;

        fetch(proxyUrl, {
            method: 'POST',
            headers: {
                "Content-Type": 'application/x-www-form-urlencoded',
            },
            body: body,
        })
            .then((response) => {
                console.log('Response received:', response);
                if (!response.ok)
                    throw new Error("response not ok");
                return response.json();
            })
            .then((data) => {
                // 응답 데이터를 콘솔에 출력
                console.log('Shortened URL:', data['result_url']);
                const shortenUrl = data['result_url'];
                console.log(shortenUrl);

                const url = document.createElement("li");
                url.textContent = shortenUrl;
                urlList.append(url);
            })
            .catch((e) => {
                console.log(e.stack);
            });
    }
});

//간단하게 오픈 api 써봐라!