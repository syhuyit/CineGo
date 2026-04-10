const input = document.getElementById("find");
const resultBox = document.getElementById("search-result");

input.addEventListener("input", function () {
  const keyword = input.value.toLowerCase().trim();
  resultBox.innerHTML = "";
  if (keyword === "") return;
  const filtered = movies.filter((m) => m.name.toLowerCase().includes(keyword));
  filtered.forEach((movie) => {
    resultBox.innerHTML += `
      <div class="col-12 mb-3">
      <div class="d-flex bg-dark p-3 rounded movie-item"
           onclick="goToMovie(${movie.id})"
           style="cursor:pointer">
        <img src="${window.location.pathname.includes('/pages/') ? '../' : ''}${movie.image}" width="30" height="40" class="me-3 rounded" />
        <div>
          <a href="movie.html?id=${movie.id}" 
         class="link-light link-offset-2 link-underline link-underline-opacity-0">
            ${movie.name}
          </a>
        </div>
      </div>
    </div>
    `;
  });
});
function goToMovie(id) {
  window.location.href = "movie.html?id=" + id;
}
