const detailContainer = document.querySelector(".blog-post");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");


const url_api = "tsh.olx.mybluehost.me/wp-json/wp/v2/posts/" + id;
const corsEnabledUrl = "https://noroffcors.herokuapp.com/" + url_api;

console.log(url_api);

console.log(id);

async function fetchInfo() {
    try {
        const response = await fetch(corsEnabledUrl);
        const info = await response.json();
        
        console.log(info);

        createHTML(info);
    
    
    }
    catch(error) {
        console.log(error);
        detailContainer.innerHTML = "An error has occured";
    }

    function createHTML(info) {
        detailContainer.innerHTML += `<div class="post-content">
        <p>${info.date}</p>
        <h1>${info.title.rendered}</h1>
        ${info.content.rendered}</div>`
        
        console.log(info.content.rendered);
        }
}



fetchInfo();



        