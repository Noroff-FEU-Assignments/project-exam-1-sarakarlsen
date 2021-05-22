const postsContainer = document.querySelector(".container");
const categoriesContainer = document.querySelector(".grid-container");
const instagramContainer = document.querySelector(".insta-container");
const slides = document.getElementsByClassName("container-post");
const dots = document.getElementsByClassName("dot");

const url = "https://tsh.olx.mybluehost.me/wp-json/wp/v2/posts?";

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
          <div class="container-post">
            <ul class="flex-item">
              <h3>${result.title.rendered}</h3>
              <h6 style="padding-left:20px;">${result.date}</h6>
              <div class="description">${result.excerpt.rendered}</div>
              <a href="blogpost.html?id=${result.id}">
                <button>READ POST</buttton>
              </a>
            </ul>
            <ul class="flex-item" id="front" style="background-image:url(${result.jetpack_featured_media_url});"></ul>
          </div>`;
    } else {
      postsContainer.innerHTML += `
        <div class="container-post" style="display:none">
            <ul class="flex-item">
              <h3>${result.title.rendered}</h3>
              <h6 style="padding-left:20px;">${result.date}</h6>
              <div class="description"${result.excerpt.rendered}</div>
              <a href="blogpost.html?id=${result.id}">
                <button>READ POST</buttton>
              </a>
            </ul>
            <ul class="flex-item" id="front" style="background-image:url(${result.jetpack_featured_media_url});"></ul>
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
            <div class="grid-item" id="index">
              <ul>
              <a href="blogpost.html?id=${category.id}"><img src="${category.jetpack_featured_media_url}"</img></a>
                <h5>${category.title.rendered}</h5>
                <a href="blogpost.html?id=${category.id}">
                  <button id="dark">READ POST</buttton>
                </a>
              </ul>
            </div>`;
      console.log("CategoryId:", category.id);
    } else {
      categoriesContainer.innerHTML += ``;
    }
  });
}

async function getPhotos() {
  const photos = await fetch(url + postInsta);
  const instaPost = await photos.json();

  instaPost.forEach(function (photo, index) {
    if (index <= 4) {
      instagramContainer.innerHTML += `
            <div class="insta-col">
                <img src="${photo.jetpack_featured_media_url}"</img>
            </div>`;
      console.log("Photos", photo.jetpack_featured_media_url);
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
