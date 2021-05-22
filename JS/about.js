const pageContainer = document.querySelector(".about-container");

const url = "https://tsh.olx.mybluehost.me/wp-json/wp/v2/pages?id=123";

async function getAboutPage() {
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
      console.log("no");
    }
  });
}

getAboutPage();
