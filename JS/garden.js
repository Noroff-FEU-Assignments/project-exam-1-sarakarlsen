const postsContainerGarden = document.querySelector(".grid-container");


const url = "https://tsh.olx.mybluehost.me/wp-json/wp/v2/posts?";
const postsGarden = "categories=21";

async function callApi() {

const responseGarden = await fetch(url + postsGarden);
const garden = await responseGarden.json();

console.log(garden);



garden.forEach(function (gardenInfo) {

    postsContainerGarden.innerHTML += `<div class="grid-item">
                  <h4>${gardenInfo.title.rendered}</h4>
                <h6 style="height:20px;">${gardenInfo.date}</h6>
                <div class="description"${gardenInfo.excerpt.rendered}</div>
                <img src="${gardenInfo.jetpack_featured_media_url}"</img></ul>
                <p><a href="blogpost.html?id=${gardenInfo.id}">READ POST</a></p>
                </div>
    `
  
  })
  
  }

  callApi();