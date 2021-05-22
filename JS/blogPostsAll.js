const url = "https://tsh.olx.mybluehost.me/wp-json/wp/v2/posts?";
const allPosts = "per_page=15";
const allPostsContainer = document.querySelector(".grid-container");
const loaderContainer = document.querySelector(".posts");

async function getAllPosts() {
  try {
    const responseAll = await fetch(url + allPosts);
    const jsonAll = await responseAll.json();

    console.log(jsonAll);

    loaderContainer.innerHTML = ``;

    jsonAll.forEach(function (allPosts, index) {
      console.log(allPosts.categories);

      if (index <= 9)
        allPostsContainer.innerHTML += `
            <div class="grid-item">
                  <h5>${allPosts.title.rendered}</h5>
                <h6 style="height:20px;">${allPosts.date}</h6>
                <a href="categories.html?id=${allPosts.categories}"></a>
                <div class="description"${allPosts.excerpt.rendered}</div>
                <a href="blogpost.html?id=${allPosts.id}"><img src="${allPosts.jetpack_featured_media_url}"</img></a></ul>
                <button class="btn-space"><a href="blogpost.html?id=${allPosts.id}">READ POST</a></button>
                </div>
                </div>
                `;
    });

    allPostsContainer.innerHTML += `<button onclick=getRest(); id="load-more">LOAD MORE POSTS</button>`;

    button = document.getElementById("load-more");

    button.addEventListener("click", (e) => {
      button.classList.add("hidden");
    });

    console.log(button);
  } catch (error) {
    console.log(error);
  }
}

getAllPosts();

async function getRest() {
  try {
    const responseRest = await fetch(url + allPosts);
    const rest = await responseRest.json();

    console.log(rest);

    rest.forEach(function (rest, index) {
      console.log("Rest of the post uploaded");

      if (index >= 10)
        allPostsContainer.innerHTML += `
      <div class="grid-item">
            <h5>${rest.title.rendered}</h5>
          <h6 style="height:20px;">${rest.date}</h6>
          <a href="categories.html?id=${rest.categories}"></a>
          <div class="description"${rest.excerpt.rendered}</div>
          <img src="${rest.jetpack_featured_media_url}"</img></ul>
          <button class="btn-space"><a href="blogpost.html?id=${rest.id}">READ POST</a></button>
          </div>
          </div>
          `;
    });
  } catch (error) {
    console.log(error);
  }
}
