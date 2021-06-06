const pageContainer = document.querySelector(".about-container");

const url = "https://monochromespaces.com/wp-json/wp/v2/pages?id=123";

async function getAboutPage() {
  try {
    const response = await fetch(url);
    const json = await response.json();

    console.log(json);

    json.forEach(function (result, index) {
      if (index === 0) {
        pageContainer.innerHTML += `
       <h1 class="title hidden">${result.title.rendered}</h1>
        ${result.content.rendered}</div>`;

        console.log(result);
      } else {
      }
    });
  } catch (error) {
    console.log(error);
    pageContainer.innerHTML = "An error occured while calling this API";
  }
}

getAboutPage();
