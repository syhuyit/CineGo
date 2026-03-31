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
document.getElementById("release").innerText =
  "Ngày công chiếu: " + movie.releaseDate;
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

  let total = movie.price * seat * quantity;

  if (movie.status === "upcoming") {
    const promo = total * 0.1;
    total -= promo;

    document.getElementById("total").innerHTML =
      `Tổng: ${total.toLocaleString("vi-VN")} VND`;
  } else {
    document.getElementById("total").innerText =
      "Tổng: " + total.toLocaleString("vi-VN") + " VND";
  }

  document.getElementById("total").innerText =
    "Tổng: " + total.toLocaleString() + " VND";
  if (total <= 0) {
    alert("Chọn ít nhất 1 ghế");
  }
}

function addToCart() {
  if (!selectedTime) {
    alert("Vui lòng chọn giờ chiếu!");
    return;
  }

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const seat = Number(document.getElementById("seat").value);
  const quantity = Number(document.getElementById("quantity").value);

  // check trùng phim + giờ + ghế
  const existing = cart.find(
    (c) => c.id === movie.id && c.time === selectedTime && c.seat === seat,
  );

  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({
      id: movie.id,
      name: movie.name,
      image: movie.image,
      time: selectedTime,
      seat: seat,
      quantity: quantity,
      price: movie.price,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Đã thêm vào giỏ vé");
}
calculate();
