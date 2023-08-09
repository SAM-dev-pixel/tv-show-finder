const searchForm = document.querySelector(".search-form");
const showContainer = document.querySelector(".show-container");

// form.addEventListener("submit", async (e) => {
//   e.preventDefault();
//   const keyword = form.elements.query.value;
//   const config = {
//     params: { q: keyword },
//   };
//   const res = await axios.get(" https://api.tvmaze.com/search/shows", config);
//   console.log(res)
//   form.elements.query.value = "";
//   return getImages(res.data);
// });

// const getImages = (shows) => {
//   for (show of shows) {
//     if (show.show.image) {
//       const img = document.createElement("img");
//       img.src = show.show.image.medium;
//       showContainer.append(img);
//     }
//   }
// };
// axios.get("https://api.tvmaze.com/search/shows?q=ninja")

// form.addEventListener("submit", getTheShows);

// async function getTheShows() {
//   const res = await fetch("https://api.tvmaze.com/shows/1/episodes?specials=1");
//   const data = await res.json();
//   let shows = "";
//   data.forEach((show) => (shows += elementShow(show)));
//   return (showContainer.innerHTML = shows);
// }
// getTheShows();

// function getTheShows() {
//   const res = fetch("https://api.tvmaze.com/shows/1/episodes?specials=1")
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//       let shows = "";
//       data.forEach((show) => (shows += elementShow(show)));
//       return (showContainer.innerHTML = shows);
//     });
// }
// getTheShows();

// function elementShow(data) {
//   console.log("dt", data.image.medium);
//   return `
//   <li class="show-wrapper">
//         <h2>${data.name}</h2>
//         <img src="${data.image.medium}" alt="" />
//   </li>
//   `;
// }

function defaultShows() {
  fetch("https://api.tvmaze.com/shows/1/episodes?specials=1")
    .then((res) => res.json())
    .then((data) => {
      let shows = "";
      data.forEach((show) => {
        if (show?.image?.medium) {
          shows += elementShow(show);
        }
      });
      return (showContainer.innerHTML = shows);
    });
}
defaultShows();

function elementShow(data) {
  return `
    <li class="show-wrapper">
      <img src="${data.image.medium}"  alt="" class="thumbnail-show"/>
      <h2 class="title-show">${data.name}</h2>
      <p class="rating-show">Rating: ${data.rating.average}</p>
    </li>
  `;
}
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const query = searchForm.elements.query.value;
  searchShows(query);
  searchForm.elements.query.value = "";
});
function searchShows(query) {
  fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let shows = "";
      data.forEach((show) => {
        if (show?.image?.medium) {
          shows += searchElementShow(show);
        }
      });
      console.log("shw", shows)
      return (showContainer.innerHTML = shows);
    });
}
function searchElementShow(data) {
  return `
    <li class="show-wrapper">
      <img src="${data.show.image.medium}"  alt="" class="thumbnail-show"/>
      <h2 class="title-show">${data.show.name}</h2>
      <p class="rating-show">Rating: ${data.show.rating.average}</p>
    </li>
  `;
}
// axios.get("https://api.tvmaze.com/shows/1/episodes?specials=1").then((res) => {
//   console.log(res);
//   let shows = "";
//   // res.data.forEach((data) => (shows += elementShow(data)));
//   // showContainer.innerHTML = shows;
//   res.data.forEach((data, i) => {
//     if (data?.image?.medium) {
//       console.log(data.name, data.image.medium, i);
//     }
//   });
// });

// function elementShow(data) {
//   if (data.name !== null && data.image.medium !== null) {
//     console.log("dt", data.image.medium);
//     // return `
//     // <li class="show-wrapper">
//     //       <h2>${data.name}</h2>
//     //       <img src="" alt="" />
//     // </li>
//     // `;
//   }
// }
