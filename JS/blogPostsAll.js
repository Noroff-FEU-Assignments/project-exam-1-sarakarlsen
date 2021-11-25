const url = "https://monochromespaces.com/wp-json/wp/v2/posts?";
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
            <div class="grid-item light-bg-second">
            <div class="left">
                  <h3 class="fix-height lg">${allPosts.title.rendered}</h3>
                <h6 class="fix-height sm">${allPosts.date}</h6>
                <h5 class="fix-height lg"${allPosts.excerpt.rendered}</h5>
                <button class="btn-space hide"><a href="blogpost.html?id=${allPosts.id}">READ POST</a></button>
                </div>
                <a href="blogpost.html?id=${allPosts.id}"><img class="has-opacity" src="${allPosts.jetpack_featured_media_url}" alt="Blog post link"/></a>
                <button class="btn-space show"><a href="blogpost.html?id=${allPosts.id}">READ POST</a></button>
                </div>
                </div>
                `;
    });

    allPostsContainer.innerHTML += `<button onclick=getRest(); class="load-more">LOAD MORE POSTS</button>`;

    button = document.querySelector(".load-more");

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
        <div class="grid-item light-bg-second">
        <div class="left">
              <h3 class="fix-height lg">${rest.title.rendered}</h3>
            <h6 class="fix-height sm">${rest.date}</h6>
            <h5 class="fix-height lg"${rest.excerpt.rendered}</h5>
            <button class="btn-space hide"><a href="blogpost.html?id=${rest.id}">READ POST</a></button>
            </div>
            <a href="blogpost.html?id=${rest.id}"><img class="has-opacity" src="${rest.jetpack_featured_media_url}" alt="Blog post link"/></a>
            <button class="btn-space show"><a href="blogpost.html?id=${rest.id}">READ POST</a></button>
            </div>
            </div>
          `;
    });
  } catch (error) {
    console.log(error);
  }
}
