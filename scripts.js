const list = document.querySelector("ul");
const buttonShowAll = document.querySelector(".show-all");
const buttonMapAll = document.querySelector(".map-all");
const buttonSomeAll = document.querySelector(".some-all");
const buttonFilterAll = document.querySelector(".filter-all");

function formatCurrency(value) {
  const newValue = value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return newValue;
}

function showAll(productsArray) {
  let myLi = "";

  productsArray.forEach((product) => {
    myLi =
      myLi +
      `
  <li>
    <img src="${product.src}" alt="${product.name}" />
     <p>${product.name}</p>
     <p class="item-price">R$ ${formatCurrency(product.price)}</p>
  </li>
  `;
  });
  list.innerHTML = myLi;
}

function mapAllItens() {
  const newPrices = menuOptions.map((product) => ({
    ...product,
    price: product.price * 0.9,
  }));
  showAll(newPrices);
}

function someAllItens() {
  const totalPrice = menuOptions.reduce(
    (acc, product) => acc + product.price,
    0
  );
  list.innerHTML = `<li>
    <p>O preço total do cardápio é: R$ ${formatCurrency(totalPrice)}</p>;
  </li>
  `;
}

function filterAllItens() {
  const veganOptions = menuOptions.filter((product) => product.vegan);

  showAll(veganOptions);
}

buttonShowAll.addEventListener("click", () => showAll(menuOptions));
buttonMapAll.addEventListener("click", mapAllItens);
buttonSomeAll.addEventListener("click", someAllItens);
buttonFilterAll.addEventListener("click", filterAllItens);
