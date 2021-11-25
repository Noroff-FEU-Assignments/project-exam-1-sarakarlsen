const detailContainer = document.querySelector(".blog-post");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

console.log(id);

const url = "https://monochromespaces.com/wp-json/wp/v2/posts";
const url_title = "https://monochromespaces.com/wp-json/wp/v2/categories/";
const url_api = url + "/" + id;
const url_author = url + "?_embed=";

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

getSinglePost().then(() => {
  enlargeImage();
});

function createHTML(info, infoAuthor) {
  detailContainer.innerHTML += `
      <div class="post-header light-bg-second">
      <div class="flex-item">
  <h2 class="set-width">${info.title.rendered}</h2>
  <h6 class="set-width">Story by: ${infoAuthor[0]._embedded.author[0].name}</h6>
  <h6 class="set-width">Posted ${info.date}</h6>
</div>
<div class="flex-item" id="index" style="background-image:url(${info.jetpack_featured_media_url});"></div>
</div>
<div class="post-content">
<h1 class="title">${info.title.rendered}</h1>
${info.content.rendered}
</div>

`;
}

function enlargeImage() {
  var images = document.querySelector(".wp-block-image");

  images.addEventListener("click", function () {
    images.classList.toggle("enlarged");
    console.log("Zoom in and out");
  });
}
