window.addEventListener("load" , function() {
    // const section = this.document.querySelector("section");
    // const searchContainer = section.querySelector(".search-container");

    // const inputBox = searchContainer.querySelector("input");

    //inputBox.value

    const url = "/api/v1/shorten";

    fetch(url, {
        method: "POST",
        body: {
            "url" : "https%3A%2F%2Fgoogle.com%2F", 
        }
    }).then((response) => console.log(response));   
});