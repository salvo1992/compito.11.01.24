/* import * as component from "./components"; */

const url = "https://api.pexels.com/v1/search?query=";

const fetchPhoto = (query) => {
  fetch(url + query, {
    headers: {
      Authorization: "563492ad6f91700001000001b0ec30909a274fddaf88db2ac6d23e44",
    },
  })
    .then((raw) => raw.json())
    .then((res) => {
      let cont = document.querySelector(".album .row");

      cont.innerHTML = res.photos.map((photo) => {
        return `<div class='col col-4'> 
                  <div class="card mb-4 shadow-sm">
                    <img src='${photo.src.large2x}' alt='${photo.id}' />
                    <div class="card-body">
                      <div class="d-flex justify-content-between align-items-center">
                        <small class="text-muted">${photo.id}</small>
                      </div>
                    </div>
                  </div> 
                </div>`;
      }).join("");
    })
    .catch((err) => console.error(err));
};
