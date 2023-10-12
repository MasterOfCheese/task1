// Khởi tạo giỏ hàng rỗng
var cart = {};

// Hàm thêm sản phẩm vào giỏ hàng
function addToCart(productId, price, quantity) {
  if (cart[productId]) {
    cart[productId].quantity += quantity;
  } else {
    cart[productId] = {
      price: price,
      quantity: quantity,
    };
  }

  updateCartUI();
}

function getInputQuantity(inputId) {
  var inputElement = document.getElementById(inputId);
  return inputElement ? parseInt(inputElement.value) : 0;
}
// Hàm cập nhật giao diện giỏ hàng
function updateCartUI() {
  var cartItems = document.getElementById("cart-items");
  var totalPriceElement = document.getElementById("total-price");
  var totalPrice = 0;

  // Xóa danh sách hiện tại trong giỏ hàng
  cartItems.innerHTML = "";

  // Duyệt qua danh sách sản phẩm trong giỏ hàng và cập nhật giao diện
  for (var productId in cart) {
    var product = cart[productId];
    var row = document.createElement("tr");
    row.innerHTML = `
              <td>${productId}</td> 
              <td>${product.price}</td>
              <td>${product.quantity}</td>
              <td>$${product.price * product.quantity}</td>
              <td><button onclick="removeFromCart('${productId}')">Xóa</button></td> <!-- Thêm nút xóa -->
              `;
    cartItems.appendChild(row);

    // Tính tổng tiền
    totalPrice += product.price * product.quantity;
  }

  // Cập nhật tổng tiền
  totalPriceElement.textContent = totalPrice;
}

function removeFromCart(productId) {
if (cart[productId]) {
if (cart[productId].quantity > 1) {
cart[productId].quantity -= 1;
} else {
delete cart[productId]; // Xóa sản phẩm khỏi giỏ hàng nếu số lượng là 1
}
updateCartUI();
}
}
function resetCart() {
cart = {};
updateCartUI();
}