const categoryContainer = document.querySelector(".grid-container");
const titleContainer = document.querySelector(".title");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url_category =
  "https://tsh.olx.mybluehost.me/wp-json/wp/v2/posts?categories=" + id;

console.log(id);

const url_title =
  "https://tsh.olx.mybluehost.me/wp-json/wp/v2/categories/" + id;

console.log(url_category);
console.log(url_title);

async function getCategories() {
  const responseCat = await fetch(url_category);
  const jsonCat = await responseCat.json();

  const responseTitle = await fetch(url_title);
  const jsonTitle = await responseTitle.json();

  console.log(jsonTitle.description);
  console.log(jsonCat);
  console.log(categoryContainer);

  titleContainer.innerHTML += `<h1>${jsonTitle.name}</h1>
  <h4>${jsonTitle.description}</h4>
  `;

  jsonCat.forEach(function (category) {
    categoryContainer.innerHTML += `<div class="grid-item">
    <h3>${category.title.rendered}</h3>
  <h6 style="height:20px;">${category.date}</h6>
  <a href="categories.html?id=${category.categories}">test</a>
  <div class="description"${category.excerpt.rendered}</div>
  <img src="${category.jetpack_featured_media_url}"</img></ul>
  <p><a href="blogpost.html?id=${category.id}">READ POST</a></p>
  </div>
  `;
  });
}

getCategories();
