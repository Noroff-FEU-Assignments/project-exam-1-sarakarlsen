const allPosts = "per_page=15";
const url = "https://tsh.olx.mybluehost.me/wp-json/wp/v2/posts?";
const allPostsContainer = document.querySelector(".grid-container");


async function callApiAll() {

const responseAll = await fetch(url+ allPosts);
        const testTwo = await responseAll.json();


        console.log(testTwo);

        testTwo.forEach(function(allPosts){
            console.log(allPosts.id)



            allPostsContainer.innerHTML += `
            <div class="grid-item">
                  <h5 style="height:30px;">${allPosts.title.rendered}</h5>
                <h6 style="height:20px;">${allPosts.date}</h6>
                <div class="description"${allPosts.excerpt.rendered}</div>
                <img class="front"src="${allPosts.jetpack_featured_media_url}"</img></ul>
                <p><a href="blogpost.html?id=${allPosts.id}">READ POST</a></p>
                </div>
                `;})

    

}


callApiAll();