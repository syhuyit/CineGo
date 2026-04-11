const container = document.getElementById("movie-list");

function renderMovie() {
  let stt = 1;
  container.innerHTML = "";
  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
    container.innerHTML += `
    <div class="col-12 mb-3">
      <div class="d-flex bg-dark p-3 rounded movie-item"
           onclick="goToMovie(${movie.id})"
           style="cursor:pointer">
        <h5 class="text-white p-3">${stt}</h5>
        <img src="${movie.image}" width="60" height="70" class="me-3 rounded" />
        <div>
          <h5 class="text-white">${movie.name}</h5>
          <p class="text-white">Giá: ${movie.price} VND</p>
        </div>
      </div>
    </div>
    `;
    stt += 1;
  }
}
function goToMovie(id) {
  window.location.href = "movie.html?id=" + id;
}

renderMovie();
