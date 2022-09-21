function lug(e, p) {
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
  let tax = subtotal * 0.18;
  document.getElementById("tax").innerText = tax.toFixed(2);
  let total = subtotal + tax + 19;
  document.getElementById("total").innerText = total.toFixed(2);
};

const bag = document.querySelector(".bag");
const shoes = document.querySelector(".shoes");
const clock = document.querySelector(".clock");

bag.addEventListener("click", (e) => {
  lug(e, 25.99);
});

shoes.addEventListener("click", (e) => {
  lug(e, 45.99);
});
clock.addEventListener("click", (e) => {
  lug(e, 74.99);
});
