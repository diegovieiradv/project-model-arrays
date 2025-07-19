const list = document.querySelector(".ul");
let myLi = "";

menuOptions.forEach((product) => {
  myLi =
    myLi +
    `
  <li>
    <img src="${product.src}" alt="${product.name}" />
     <p>${product.name}</p>
     <p class="item-price">R$ ${product.price}</p>
  </li>
  `;
});
console.log(myLi);
