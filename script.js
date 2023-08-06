const form = document.querySelector(".search-form");
const showContainer = document.querySelector(".show-container");

// form.addEventListener("submit", async (e) => {
//   e.preventDefault();
//   const keyword = form.elements.query.value;
//   const config = {
//     params: { q: keyword },
//   };
//   const res = await axios.get(" https://api.tvmaze.com/search/shows", config);
//   // console.log(res.data)
//   form.elements.query.value = "";
//   return getImages(res.data);
// });

// const getImages = (shows) => {
//   console.log("yey", shows);
//   for (show of shows) {
//     if (show.show.image) {
//       const img = document.createElement("img");
//       img.src = show.show.image.medium;
//       showContainer.append(img);
//     }
//   }
// };

form.addEventListener("submit", getTheShows);
async function getTheShows() {
  try {
    // await fetch("https://api.tvmaze.com/shows/1/episodes?specials=1")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     let shows = "";
    //     data.forEach((show) => (shows += elementShow(show)));
    //     console.log("show", shows);
    //     showContainer.innerHTML = shows;
    //   });
    // const res = await fetch(
    //   "https://api.tvmaze.com/shows/1/episodes?specials=1"
    // );
    const res = await fetch("https://api.tvmaze.com/search/shows?q=girls");
    const data = await res.json();
    console.log(data);
    let shows = "";
    data.forEach((show) => (shows += elementShow(show)));
    console.log("show", shows);
    showContainer.innerHTML = shows;
  } catch (error) {
    console.log("fuck", error);
    // alert("not found");
  }
}
getTheShows();
function elementShow(data) {
  console.log(data.image.original);
  return `
  <li class="show-wrapper">
        <h2>${data.show.name}</h2>
        <img src="" alt="" />
  </li>
  `;
}
