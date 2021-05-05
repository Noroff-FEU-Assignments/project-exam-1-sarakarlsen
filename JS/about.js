const pageContainer = document.querySelector(".about-container");

const url = "https://tsh.olx.mybluehost.me/wp-json/wp/v2/pages?id=123";



async function callApi() {
  const response = await fetch(url);
  const json = await response.json();

  console.log(json);


  json.forEach(function( result, index) {

    if (index === 0) {


        pageContainer.innerHTML += `
       <h1>${result.title.rendered}</h1>
        ${result.content.rendered}</div>`;

        console.log ("hello");



  }

  else {
      console.log("no")
  }



})

}

callApi();




