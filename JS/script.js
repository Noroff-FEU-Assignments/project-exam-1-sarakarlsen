const postsContainer = document.querySelector(".container");
const categoriesContainer = document.querySelector(".grid-container");
const instagramContainer = document.querySelector(".insta-container");
const slides = document.getElementsByClassName("container-post");
const dots = document.getElementsByClassName("dot");
const prev = document.getElementsByClassName("prev");
const next = document.getElementsByClassName("next");

console.log(prev);
console.log(next);

const url = "https://monochromespaces.com/wp-json/wp/v2/posts?";
const url_alt = "https://monochromespaces.com/wp-json/wp/v2/media";
const perPage = "per_page=5";
const postCategory = "categories=19";
const postInsta = "categories=20";

let currentSlide = 1;

async function getPosts(postsContainer) {
  const response = await fetch(url + perPage);
  const json = await response.json();

  console.log("PostsSlides", json);

  postsContainer.innerHTML = ``;

  json.forEach(function (result, index) {
    if (index === 0) {
      postsContainer.innerHTML += `
      <a class="prev" aria-label="Previous slide" tabindex=0 onclick="previousSlide(-1)"><i class="far fa-chevron-left"></i></a>
      <a class="next" aria-label="Next slide" tabindex=0 onclick="nextSlide(1)"><i class="far fa-chevron-right"></i></a>
          <div class="container-post index">
            <div class="flex-item index">
              <h2 class="set-width">${result.title.rendered}</h2>
              <h6 class="set-width">${result.date}</h6>
              <div class="set-width">${result.excerpt.rendered}</div>
                <button class="btn-space"><a href="blogpost.html?id=${result.id}">READ POST
              </a></button>
            </div>
            <div class="flex-item" id="index" style="background-image:url(${result.jetpack_featured_media_url});"></div>
          </div>`;
    } else {
      postsContainer.innerHTML += `
        <div class="container-post index" style="display:none">
            <div class="flex-item index">
            <h2 class="set-width">${result.title.rendered}</h2>
            <h6 class="set-width">${result.date}</h6>
            <div class="set-width">${result.excerpt.rendered}</div>
            <a href="blogpost.html?id=${result.id}">
              <button class="btn-space">READ POST</buttton>
              </a>
            </div>
            <div class="flex-item" id="index" style="background-image:url(${result.jetpack_featured_media_url});"></div>
        </div>`;
    }
    console.log("PostId:", result.id);
  });
}

async function getProjects(categoriesContainer) {
  const responseCat = await fetch(url + postCategory);
  const categories = await responseCat.json();

  console.log("Categories:", categories);

  categories.forEach(function (category, index) {
    if (index <= 2) {
      categoriesContainer.innerHTML += `
            <div class="grid-img">
              <div>
              <a href="blogpost.html?id=${category.id}"><img class="has-opacity" src="${category.jetpack_featured_media_url}" alt=""/></a>
                <h3 class="fix-height lg">${category.title.rendered}</h3>
                <a href="blogpost.html?id=${category.id}">
                  <button id="dark">READ POST</buttton>
                </a>
              </div>
            </div>`;
      console.log("CategoryId:", category.id);
    } else {
      categoriesContainer.innerHTML += ``;
    }
  });
}

async function getPhotos() {
  const altTextFetch = await fetch(url_alt);
  const altText = await altTextFetch.json();

  console.log(altText);

  altText.forEach(function (alt, index) {
    if (index <= 4) {
      instagramContainer.innerHTML += `   <div class="insta-col"><img src="${alt.source_url}" alt="${alt.alt_text}"/>
      </div>`;
    } else {
      instagramContainer.innerHTML += ``;
    }
  });
}

function nextSlide() {
  if (currentSlide + 1 > slides.length) {
    currentSlide = 1;
  } else {
    currentSlide += 1;
  }
  displaySlideWithIndex(currentSlide);
}

function previousSlide() {
  if (currentSlide - 1 < 1) {
    currentSlide = slides.length;
  } else {
    currentSlide -= 1;
  }
  displaySlideWithIndex(currentSlide);
}

function hideAllSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
}

function resetAllDots() {
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
}

function activateSlideAndDotWithIndex(index) {
  slides[index - 1].style.display = "flex";
  dots[index - 1].className += " active";
  currentSlide = index;
}

function displaySlideWithIndex(index) {
  hideAllSlides();
  resetAllDots();
  activateSlideAndDotWithIndex(index);
}

getPosts(postsContainer)
  .then(() => {
    displaySlideWithIndex(1);
  })
  .then(() => {
    getProjects(categoriesContainer);
  })
  .then(() => {
    getPhotos();
  });
