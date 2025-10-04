    let allproducts = document.querySelector("#allproducts");

fetch('https://dummyjson.com/products', {
  method: "GET",
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

    let products = data.products;
    console.log(products);

    allproducts.innerHTML = products.map(function (value, index, array) {
      console.log(value);
      return `
    <div class = "eachproducts">
    <img src="${value.thumbnail}" alt="${value.title} ">
    <h3>Tittle:${value.title}</h3>
    <h5>DiscountPercentage:${value.discountPercentage}</h5>
    <h5>Brand:${value.brand}</h5>
<h5>Price:${value.price} </h5>
<button>Add to cart</button>
    </div>s
    `;
    });
    console.log(allproducts);
  })
