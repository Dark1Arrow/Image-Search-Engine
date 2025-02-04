const form = document.querySelector(".input");
const gallery = document.querySelector(".image");
const input = document.querySelector(".input input");
const alert = document.querySelector(".alert");
const showMore = document.querySelector(".showMore");

const imageKey = "O7dkLkjRs3cUiuXKojy_1dT3p42XuyvLjFkPamv1B38";
let keyword = "mountain";
let page = 1;

async function fecthImages() {
     if (page == 1) {
          gallery.innerHTML = "";
     }

     if (keyword == "") {
          alert.style.display = "block";
          showMore.style.display = "none";
     } else {
          alert.style.display = "none";
          showMore.style.display = "block";

          const response = await fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${imageKey}&per_page=12`);

          const data = await response.json();
          const results = data.results;
          console.log(response);
          console.log(data);
          console.log(results)
          input.value = "";

          results.map((results) => {
               const image = document.createElement("IMG");
               const imageLink = document.createElement("a");
               image.src = results.urls.small;
               imageLink.href = results.links.html;
               imageLink.target = "_blank";
               imageLink.appendChild(image);
               gallery.appendChild(imageLink);
               console.log(imageLink);
          });
     }
}

form.addEventListener("submit", (e) => {
     e.preventDefault();
     page = 1;
     keyword = input.value;
     fecthImages();
})

showMore.addEventListener("click", () => {
     page++;
     fecthImages();
})