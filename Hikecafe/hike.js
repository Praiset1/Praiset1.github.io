
let carts = document.querySelectorAll(".add-cart");
carts[0];
carts[1];
let products = [
  {
    name: "grills",
    tag: "chicken",
    price: 15,
    inCart: 0,
  },
  {
    name: "snacks",
    tag: "snack",
    price: 4,
    inCart: 0,
  },
  {
    name: "juice",
    tag: "juicedrink",
    price: 5,
    inCart: 0,
  },
  {
    name: "vegetarian",
    tag: "vegs",
    price: 8,
    inCart: 0,
  },
  {
    name: "salads",
    tag: "salad1",
    price: 3.5,
    inCart: 0,
  },
];

window.addEventListener("load", function () {
  var container = document.getElementById("cart-products"),

  for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener("click", () => {
      cartNumbers(products[i]);
      totalCost(products[i]);
    });
  }

  function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem("cartNumbers");
    if (productNumbers) {
      document.querySelector(".cart span").textContent = productNumbers;
    }
  }

  function cartNumbers(product) {
    console.log("the product clicked is", product);
    let productNumbers = localStorage.getItem("cartNumbers");
      productNumbers = parseInt(
      productNumbers
    ); /*parse helps in converting type e.g string to number (INT)*/

    if (productNumbers) {
      localStorage.setItem("cartNumbers", productNumbers + 1);
      document.querySelector(".cart span").textContent = productNumbers + 1;
    } else {
      localStorage.setItem("cartNumbers", 1);
      document.querySelector(".cart span").textContent = 1;
    }
    setItems(product);
  }

  function setItems(product) {
    let cartItems = localStorage.getItem("productsInCart");
    /* check if cart has any products already, not to reset*/
    cartItems = JSON.parse(cartItems);
    console.log("inside of setItems function");
    console.log("my cartItems are", cartItems);

    if (cartItems != null) {
      if (cartItems[product.tag] == undefined) {
        cartItems = {
          ...cartItems /*... call to pick last items in cart */,
          [product.tag]: product,
        };
      }
      cartItems[product.tag].inCart += 1;
    } else {
      product.inCart = 1;
      cartItems = {
        [product.tag]: product,
      };
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
    /* we need to store our products as JSON file not JS objects, */
  }
  function totalCost(product) {
    console.log("product price is", product.price);
    let cartCost = localStorage.getItem('totalCost');
    console.log("my cartCost is", cartCost);
    console.log(typeof cartCost );

    if(cartCost != null){
    cartCost = parseInt(cartCost);

      localStorage.setItem("totalCost", cartCost + product.price);
  }else
      localStorage.setItem("totalCost", product.price);
    
  }
}); 
onLoadCartNumbers();
