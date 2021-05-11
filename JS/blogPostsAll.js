const url = "https://tsh.olx.mybluehost.me/wp-json/wp/v2/posts?";
const allPosts = "per_page=15";
const allPostsContainer = document.querySelector(".grid-container");
const loaderContainer = document.querySelector(".posts");

async function getAllPosts() {
  const responseAll = await fetch(url + allPosts);
  const jsonAll = await responseAll.json();

  console.log(jsonAll);

  loaderContainer.innerHTML = ``;

  jsonAll.forEach(function (allPosts) {
    console.log(allPosts.categories);

    allPostsContainer.innerHTML += `
            <div class="grid-item">
                  <h3>${allPosts.title.rendered}</h3>
                <h6 style="height:20px;">${allPosts.date}</h6>
                <a href="categories.html?id=${allPosts.categories}">test</a>
                <div class="description"${allPosts.excerpt.rendered}</div>
                <img src="${allPosts.jetpack_featured_media_url}"</img></ul>
                <p><a href="blogpost.html?id=${allPosts.id}">READ POST</a></p>
                </div>
                </div>
                `;
  });
}

getAllPosts();
