const detailContainer = document.querySelector(".blog-post");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");


const url_api = "https://tsh.olx.mybluehost.me/wp-json/wp/v2/posts/" + id;
console.log(url_api);

console.log(id);

async function fetchInfo() {
    try {
        const response = await fetch(url_api);
        const info = await response.json();
        
        console.log(info);

        createHTML(info);
    
    
    }
    catch(error) {
        console.log(error);
        detailContainer.innerHTML = "An error has occured";
    }

    function createHTML(info) {
        detailContainer.innerHTML += `
        <h3 style="text-align:center;">${info.title.rendered}</h3>
        <div class="post-content">
        <h6>${info.date}</h6> <br>
        ${info.content.rendered}
        </div>`
        
        console.log(info.content.rendered);
        }
}



fetchInfo();



        