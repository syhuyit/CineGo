const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const movie = movies.find((m) => m.id == id);

if (!movie) {
  alert("Không tìm thấy phim!");
  throw new Error("Movie not found");
}

document.getElementById("name").innerText = movie.name;
document.getElementById("img").src = movie.image;
document.getElementById("desc").innerText = movie.description;
document.getElementById("price").innerText = "Giá vé: " + movie.price + " VND";

const timeBox = document.getElementById("times");

let selectedTime = "";

movie.showtimes.forEach((t) => {
  timeBox.innerHTML += `
    <button class="btn btn-outline-light m-1" onclick="selectTime('${t}', this)">
      ${t}
    </button>`;
});

function selectTime(t, el) {
  selectedTime = t;

  document.querySelectorAll("#times button").forEach((btn) => {
    btn.classList.remove("btn-warning");
    btn.classList.add("btn-outline-light");
  });

  el.classList.remove("btn-outline-light");
  el.classList.add("btn-warning");
}

function calculate() {
  const seat = Number(document.getElementById("seat").value);
  const quantity = Number(document.getElementById("quantity").value);

  const total = movie.price * seat * quantity;

  document.getElementById("total").innerText =
    "Tổng: " + total.toLocaleString() + " VND";
  if (total <= 0) {
    alert("Chọn ít nhất 1 ghế");
  }
}

function addToCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const total = document.getElementById("total").innerText;

  cart.push({
    name: movie.name,
    time: selectedTime,
    total: total,
  });

  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Đã thêm vào giỏ vé");
}
calculate();
