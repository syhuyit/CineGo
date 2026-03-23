const params = new URLSearchParams(window.location.search);
const type = params.get("type");

// Hiển thị tiêu đề
document.getElementById("title").innerText = type;

// Lọc phim theo thể loại
const filtered = movies.filter((m) => m.type === type);

// Render
const container = document.getElementById("movie-list");

filtered.forEach((movie) => {
  container.innerHTML += `
    <div class="col-12 mb-3">
      <div class="d-flex bg-dark p-3 rounded movie-item"
           onclick="goToMovie(${movie.id})"
           style="cursor:pointer">
        <img src="${movie.image}" width="120" height="150" class="me-3 rounded" />
        <div>
          <h5>${movie.name}</h5>
          <p>Giá: ${movie.price} VND</p>
        </div>
      </div>
    </div>
  `;
});

function goToMovie(id) {
  window.location.href = "movie.html?id=" + id;
}
