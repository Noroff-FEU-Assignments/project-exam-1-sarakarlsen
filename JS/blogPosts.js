const detailContainer = document.querySelector(".blog-post");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

console.log(id);

const url = "https://tsh.olx.mybluehost.me/wp-json/wp/v2/posts";

const url_title = "https://tsh.olx.mybluehost.me/wp-json/wp/v2/categories/";

const url_api = url + "/" + id;
console.log(url_api);

const url_author = url + "?_embed=";

console.log(url_author);

async function getSinglePost() {
  try {
    const response = await fetch(url_api);
    const info = await response.json();

    const responseAuthor = await fetch(url_author);
    const infoAuthor = await responseAuthor.json();

    const titleResponse = await fetch(url_title);
    const jsonTitle = await titleResponse.json();

    console.log("Author:", infoAuthor);
    console.log("Categories", jsonTitle);

    detailContainer.innerHTML = ``;

    jsonTitle.forEach(function (jsonTitle) {
      console.log(jsonTitle.id);
    });

    createHTML(info, infoAuthor);
  } catch (error) {
    console.log(error);
    detailContainer.innerHTML = "An error occured while calling this API";
  }
}

getSinglePost();

function createHTML(info, infoAuthor) {
  detailContainer.innerHTML += `
      <div class="post-header">
      <ul class="flex-item">
  <h1>${info.title.rendered}</h1>
  <h4 style="padding-left:20px;">Story by: ${infoAuthor[0]._embedded.author[0].name}</h4>
  <h4 style="padding-left:20px;">Posted ${info.date}</h4>
</ul>
<ul class="flex-item" id="front" style="background-image:url(${info.jetpack_featured_media_url});"></ul>
</div>
<div class="post-content">${info.content.rendered}
</div>

`;
}
