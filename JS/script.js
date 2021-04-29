const postsContainer = document.querySelector(".container");
const postsContainerCat = document.querySelector(".test-container");

const url = "https://tsh.olx.mybluehost.me/wp-json/wp/v2/posts?";

const postsIndex = "per_page=5";
const postsCat = "categories=19";






async function callApi() {
  const response = await fetch(url + postsIndex);
  const json = await response.json();

  console.log(json);

  const responseCat = await fetch(url + postsCat);
  const categories = await responseCat.json();

  console.log(categories);


  json.forEach(function (result, index) {

    if (index === 0) {
      postsContainer.innerHTML += `<div class="container-post">
          <ul class="flex-item">
          <h3>${result.title.rendered}</h3>
          <h6 style="padding-left:20px;">${result.date}</h6>
          <div class="description"${result.excerpt.rendered}</div>
          <a href="blogpost.html?id=${result.id}"><button class="button">READ POST</buttton></a>
          </ul>
          <ul class="flex-item">
          <img class="front"src="${result.jetpack_featured_media_url}"</img></ul>
          </div>`;

      console.log(result.id);


    }

    else {




      postsContainer.innerHTML += `<div class="container-post" style="display:none">
          <ul class="flex-item">
          <h3>${result.title.rendered}</h3>
          <h6 style="padding-left:20px;">${result.date}</h6>
          <div class="description"${result.excerpt.rendered}</div>
          <p><a href="blogpost.html?id=${result.id}"><button class="button">READ POST</buttton></a></p>
          </ul>
          <ul class="flex-item">
          <img src="${result.jetpack_featured_media_url}"</img></ul>
          </div>`;




    };

  })





  categories.forEach(function (category, index) {

    if (index <= 2) {

      postsContainerCat.innerHTML += `<div class="categories-container">
                <ul>
                <h3>${category.title.rendered}</h3>
                <img src="${category.jetpack_featured_media_url}"</img>
                <a href="blogpost.html?id=${category.id}"><button class="button">READ POST</buttton></a>
                </ul>
                </div>`

      console.log(category.id);
    }

    else {
      postsContainerCat.innerHTML += ``;
    }
  })

    ;




}






callApi();






var slideIndex = 1;

showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("container-post");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";

}

setNewImage() 

const photos = document.querySelectorAll("img");

console.log(photos);



































