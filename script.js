document.addEventListener("DOMContentLoaded", function() {
    const minusButton = document.querySelector(".minus-btn");
    const plusButton = document.querySelector(".plus-btn");
    const quantityInput = document.querySelector(".quantity-input");
  
    minusButton.addEventListener("click", function() {
      let value = parseInt(quantityInput.value);
      if (value > 1) {
        value--;
        quantityInput.value = value;
      }
    });
  
    plusButton.addEventListener("click", function() {
      let value = parseInt(quantityInput.value);
      value++;
      quantityInput.value = value;
    });
  });

  
// Cho phép đặt từ ngày hiện tại
  document.addEventListener("DOMContentLoaded", function() {
    var today = new Date().toISOString().split("T")[0];
    document.getElementById("delivery-date").setAttribute("min", today);
  });
  
  function addToCart(event) {
    event.preventDefault();
    event.target.innerHTML = "<b>Đã thêm vào giỏ hàng</b>";
}


document.addEventListener("DOMContentLoaded", function() {
    const loginBtn = document.getElementById("login-btn");
    const loginForm = document.getElementById("login-form");
    const popupOverlay = document.getElementById("popup-overlay");

    loginBtn.addEventListener("click", function() {
        loginForm.style.display = "block";
        popupOverlay.style.display = "block";
    });

    popupOverlay.addEventListener("click", function() {
        loginForm.style.display = "none";
        popupOverlay.style.display = "none";
    });
});


