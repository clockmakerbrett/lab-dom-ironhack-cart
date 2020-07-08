// ITERATION 1

function updateSubtotal(product) {
  const $price = product.querySelector(".price span");
  const $quantity = product.querySelector(".quantity input");
  const $subtotal = product.querySelector(".subtotal");
  const newSubtotal = parseInt($price.innerText) * parseInt($quantity.value);
  $subtotal.innerText = `$${newSubtotal}`;
  return newSubtotal;
}

function calculateAll() {
  // ITERATION 2
  const products = document.getElementsByClassName("product");
  let total = 0;

  for (let product of products) {
    const subtotal = updateSubtotal(product);
    total += subtotal;
  }
  // ITERATION 3
  const $total = document.querySelector("#total-value span");
  $total.innerText = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const $productCart = document.querySelector("#cart tbody");
  const $productToRemove = target.parentNode.parentNode;
  $productCart.removeChild($productToRemove);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const $productCart = document.querySelector("#cart tbody");
  const $productName = document.getElementById("product-name");
  const $unitPrice = document.getElementById("unit-price");
  const $product = `
  <tr class="product">
    <td class="name"><span>${$productName.value}</span></td>
    <td class="price">$<span>${$unitPrice.value}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  </tr>`;
  $productCart.innerHTML += $product;
}

window.addEventListener("load", () => {
  const $calculatePricesBtn = document.getElementById("calculate");
  $calculatePricesBtn.addEventListener("click", calculateAll);
  const $removeProductBtns = document.getElementsByClassName("btn btn-remove");
  for (let btn of $removeProductBtns) {
    btn.addEventListener("click", removeProduct);
  }
  const $createProductBtn = document.getElementById("create");
  $createProductBtn.addEventListener("click", createProduct);
});
