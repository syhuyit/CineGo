const cartBox = document.getElementById("cart-list");
const totalBox = document.getElementById("total-price");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart() {
  cartBox.innerHTML = "";

  if (cart.length === 0) {
    cartBox.innerHTML = "<p>Giỏ vé trống 😢</p>";
    totalBox.innerText = "";
    return;
  }

  let total = 0;

  cart.forEach((item, index) => {
    const itemTotal = item.price * item.seat * item.quantity;
    total += itemTotal;

    cartBox.innerHTML += `
      <div id="ticket" class="d-flex align-items-center bg-dark p-3 mb-3 rounded">

        <img src="${item.image}" width="120" class="me-3 rounded">

        <div class="flex-grow-1">
          <h5>${item.name}</h5>
          <p>🕒 ${item.time}</p>
          <p>💺 ${getSeatName(item.seat)}</p>

          <div class="d-flex align-items-center">
            <button class="btn btn-sm btn-light me-2"
              onclick="changeQuantity(${index}, -1)">-</button>

            <span>${item.quantity}</span>

            <button class="btn btn-sm btn-light ms-2"
              onclick="changeQuantity(${index}, 1)">+</button>
          </div>

          <p class="mt-2">
            💰 ${formatMoney(itemTotal)}
          </p>
        </div>

        <button class="btn btn-danger"
          onclick="removeItem(${index})">
          Xóa
        </button>
      </div>
    `;
  });

  totalBox.innerText = "Tổng tiền: " + formatMoney(total);
}

function changeQuantity(index, delta) {
  cart[index].quantity += delta;

  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function getSeatName(seat) {
  if (seat == 1) return "Ghế thường";
  if (seat == 1.4) return "Ghế VIP";
  if (seat == 1.8) return "Ghế đôi";
}

function formatMoney(number) {
  return number.toLocaleString("vi-VN") + " VND";
}

renderCart();
