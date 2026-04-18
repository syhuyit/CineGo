const trendingBox = document.getElementById("trending");
const upcomingBox = document.getElementById("upcoming");

function renderMovie(movie) {
  return `
    <div class="col-md-2 mb-3">
      <div class="card movie-card">
        <div class="img-box">
          <a href="movie.html?id=${movie.id}">
            <img src="${window.location.pathname.includes('/pages/') ? '../' : ''}${movie.image}" class="card-img-top" height="250">
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

function renderCategory() {
  const categoryBox = document.getElementById("category-list");
  const categories = [...new Set(movies.map((m) => m.type))];

  categories.forEach((c) => {
    categoryBox.innerHTML += `
      <li>
        <a class="dropdown-item" href="category.html?type=${c}">
          ${c}
        </a>
      </li>
    `;
  });
}
renderCategory();
