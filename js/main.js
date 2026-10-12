(function () {
  "use strict";

  const packagingButtons = document.querySelectorAll(".packaging-btn");
  const skuEl = document.querySelector("[data-display-sku]");
  const priceEl = document.querySelector("[data-display-price]");
  const oldPriceEl = document.querySelector("[data-display-old-price]");
  const cartBtn = document.querySelector("[data-cart-btn]");

  if (!packagingButtons.length || !skuEl || !priceEl || !oldPriceEl) {
    return;
  }

  function selectPackaging(button) {
    packagingButtons.forEach(function (btn) {
      const isActive = btn === button;
      btn.classList.toggle("is-active", isActive);
      btn.setAttribute("aria-pressed", String(isActive));
    });

    skuEl.textContent = button.dataset.sku;
    priceEl.textContent = button.dataset.price;
    oldPriceEl.textContent = button.dataset.oldPrice;
  }

  packagingButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      selectPackaging(button);
    });
  });

  if (cartBtn) {
    cartBtn.addEventListener("click", function () {
      const active = document.querySelector(".packaging-btn.is-active");
      const weight = active ? active.dataset.weight : "";
      const label = cartBtn.querySelector(".btn-cart__text");

      cartBtn.disabled = true;
      if (label) {
        label.textContent = "Добавлено";
      }

      window.setTimeout(function () {
        cartBtn.disabled = false;
        if (label) {
          label.textContent = "В корзину";
        }
      }, 1200);

      // Демонстрация выбора без реальной корзины
      console.info("В корзину:", weight, "арт.", skuEl.textContent);
    });
  }
})();
