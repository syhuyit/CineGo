const trendingBox = document.getElementById("trending");
const upcomingBox = document.getElementById("upcoming");

function renderMovie(movie) {
  return `
    <div class="col-md-3 mb-4">
      <div class="card movie-card">
        <div class="img-box">
          <a href="movie.html?id=${movie.id}">
            <img src="${movie.image}" class="card-img-top" height="200">
          </a>
          <div class="overlay">
            <p>${movie.name}</p>
            <a href="movie.html?id=${movie.id}" class="btn btn-danger">🎬 Xem chi tiết</a>
          </div>
        </div>
      </div>
    </div>
  `;
}

const trending = movies.filter((m) => m.status === "trending");
const upcoming = movies.filter((m) => m.status === "upcoming");

trending.forEach((m) => {
  trendingBox.innerHTML += renderMovie(m);
});
upcoming.forEach((m) => {
  upcomingBox.innerHTML += renderMovie(m);
});
