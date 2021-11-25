const categoryContainer = document.querySelector(".grid-container");
const titleContainer = document.querySelector(".title");
const loaderDiv = document.querySelector(".loading");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url_category =
  "https://monochromespaces.com/wp-json/wp/v2/posts?categories=" + id;

console.log(id);

const url_title = "https://monochromespaces.com/wp-json/wp/v2/categories/" + id;

console.log(url_category);
console.log(url_title);
console.log(url_category);
console.log(loaderDiv);

async function getCategories() {
  const responseCat = await fetch(url_category);
  const jsonCat = await responseCat.json();

  const responseTitle = await fetch(url_title);
  const jsonTitle = await responseTitle.json();

  console.log(jsonTitle.description);
  console.log(jsonCat);
  console.log(categoryContainer);

  loaderDiv.innerHTML = ``;

  titleContainer.innerHTML += `<h1>${jsonTitle.name}</h1>
  `;

  jsonCat.forEach(function (category) {
    categoryContainer.innerHTML += `<div class="grid-item light-bg-second">
    <div class="left">
    <h3 class="fix-height lg">${category.title.rendered}</h3>
  <h6 class="fix-height sm">${category.date}</h6>
  <h5 class="fix-height lg"${category.excerpt.rendered}</h5>
  <button class="btn-space hide"><a href="blogpost.html?id=${category.id}">READ POST</a></button></div>
  <a href="blogpost.html?id=${category.id}"><img class="has-opacity" alt="Blog specific page link" src="${category.jetpack_featured_media_url}"/></a>
 <button class="btn-space show"><a href="blogpost.html?id=${category.id}">READ POST</a></button>
  </div>
  `;
  });
}

getCategories();
