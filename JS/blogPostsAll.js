const allPosts = "per_page=15";
const url = "https://tsh.olx.mybluehost.me/wp-json/wp/v2/posts?";
const allPostsContainer = document.querySelector(".grid-container");


async function callApiAll() {

const responseAll = await fetch(url + allPosts);
        const testTwo = await responseAll.json();


        console.log(testTwo);

        testTwo.forEach(function(blabla){
            console.log(blabla.id)



            allPostsContainer.innerHTML += `
            <div class="grid-item">
                  <h3>${blabla.title.rendered}</h3>
                <h6>${blabla.date}</h6>
                <div class="description"${blabla.excerpt.rendered}</div>
                <p><a href="blogpost.html?id=${blabla.id}">READ MORE</a></p>
                <img class="front"src="${blabla.jetpack_featured_media_url}"</img></ul>
                </div>
                `;})

    

}


callApiAll();