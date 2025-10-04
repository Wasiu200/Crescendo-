let addToCart = document.querySelector("#addToCart");
let allproducts = document.querySelector("#allproducts");

let addtocart = document.addtocart("#addtocart");

async function addToCart() {
  try {
    let response = await fetch("https://dummyjson.com/products", {
      method: "GET",
    });

    let data = await response.json();
    console.log(data);

    let products = data.products;

    let allProducts = document.querySelector("#allProducts");

    products.forEach(function (value, index, array) {
      // console.log(value);
      allProducts.innerHTML += `
            <div class="eachProduct">
                <img src="${value.thumbnail}" alt="${value.title}">
                <h5>${value.title}</h5>
                <h5>${value.id}</h5>
                <p>${value.price}</p>
                <button onclick="addToCart('${value.id}', '${value.title}', '${value.thumbnail}', '${value.price}')">Add to Cart</button></div>
            </div>
            `;
    });
  } catch (error) {
    console.log(error);
  }
}

addToCart();

function addToCart(id, title, image, price) {
  // alert("Button clicked")
  // console.log(id, title, image, price)

  const cartItem = JSON.parse(localStorage.getItem("carts")) || [];
  // console.log(cartItem)
  let productCart = {
    id: id,
    title: title,
    image: image,
    price: price,
  };

  cartItem.push(productCart);
  // console.log(cartItem)
  localStorage.setItem("carts", JSON.stringify(cartItem));

  console.log(JSON.parse(localStorage.getItem("carts")).length);
  console.log(JSON.parse(localStorage.getItem("carts")));
}
