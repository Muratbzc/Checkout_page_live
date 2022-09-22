const taxRate = 0.18;
const shippingPrice = 19;
const shippingFreePrice = 300;

window.addEventListener("load", () => {
  localStorage.setItem("taxRate", taxRate);
  localStorage.setItem("shippingPrice", shippingPrice);
  localStorage.setItem("shippingFreePrice", shippingFreePrice);
  cartTotal();
});

function product(e, p) {
  if (e.target.classList.contains("fa-plus")) {
    let n = Number(e.target.previousElementSibling.innerText);
    n++;
    e.target.previousElementSibling.innerText = n;
    e.target.parentElement.parentElement.lastElementChild.firstElementChild.innerText =
      Number(n * p).toFixed(2);
  } else if (e.target.classList.contains("fa-minus")) {
    let n = Number(e.target.nextElementSibling.innerText);
    n > 1 && n--;
    e.target.nextElementSibling.innerText = n;
    e.target.parentElement.parentElement.lastElementChild.firstElementChild.innerText =
      Number(n * p).toFixed(2);
  } else if (e.target.classList.contains("remove")) {
    e.target.parentElement.parentElement.remove();
  }
  cartTotal();
}

const cartTotal = function () {
  const productTotal = document.querySelectorAll(".product");
  console.log(productTotal);
  let subtotal = 0;
  productTotal.forEach((p) => (subtotal += Number(p.innerText)));
  document.getElementById("subtotal").innerText = subtotal.toFixed(2);
  let tax = subtotal * localStorage.getItem("taxRate");
  document.getElementById("tax").innerText = tax.toFixed(2);
  let shipping =
    subtotal > 0 && subtotal < localStorage.getItem("shippingFreePrice")
      ? localStorage.getItem("shippingPrice")
      : 0;
  document.getElementById("shipping").innerText = shipping;
  let total = Number(subtotal + tax + shipping);
  document.getElementById("total").innerText = total.toFixed(2);
};

const bag = document.querySelector(".bag");
const shoes = document.querySelector(".shoes");
const clock = document.querySelector(".clock");

bag.addEventListener("click", (e) => {
  product(e, 25.99);
});

shoes.addEventListener("click", (e) => {
  product(e, 45.99);
});
clock.addEventListener("click", (e) => {
  product(e, 74.99);
});
