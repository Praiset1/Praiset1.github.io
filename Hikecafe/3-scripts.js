var products = {
  1: {
    name: "Burgers",
    desc: "",
    img: "images/download (2).jpeg",
    price: 5,
  },

  2: {
    name: "Chicken",
    desc: "",
    img: "images/download (6).jpeg",
    price: 12,
  },

  3: {
    name: "chocolate banana",
    desc: "",
    img: "images/images (7).jpeg",
    price: 7,
  },
  
  4: {
    name: "shakes",
    desc: "",
    img: "images/images (6).jpeg",
    price: 11,
  },
};

window.addEventListener("load", function () {
  var container = document.getElementById("cart-products"),
    item = null,
    part = null;
  for (let i in products) {
    item = document.createElement("div");
    item.classList.add("p-item");

    part = document.createElement("img");
    part.src = products[i]["img"];
    part.classList.add("p-img");
    item.appendChild(part);

    part = document.createElement("div");
    part.innerHTML = products[i]["name"];
    part.classList.add("p-name");
    item.appendChild(part);

    part = document.createElement("div");
    part.innerHTML = "$" + products[i]["price"];
    part.classList.add("p-price");
    item.appendChild(part);

    part = document.createElement("div");
    part.innerHTML = products[i]["desc"];
    part.classList.add("p-desc");
    item.appendChild(part);

    part = document.createElement("input");
    part.type = "button";
    part.value = "Add to Cart";
    part.classList.add("p-add");
    part.onclick = cart.add;
    part.dataset.id = i;
    item.appendChild(part);

    container.appendChild(item);
  }
});

var cart = {
  data: null, // current cart

  load: function () {
    // load() : load previous  cart

    cart.data = localStorage.getItem("cart");
    if (cart.data == null) {
      cart.data = {};
    } else {
      cart.data = JSON.parse(cart.data);
    }
  },

  save: function () {
    // save() : save current  cart

    localStorage.setItem("cart", JSON.stringify(cart.data));
  },

  /* [C2] CART ACTIONS */

  add: function () {
    // add() : add selected item to cart

    // Update current  cart
    if (cart.data[this.dataset.id] == undefined) {
      var product = products[this.dataset.id];
      cart.data[this.dataset.id] = {
        name: product["name"],
        desc: product["desc"],
        img: product["img"],
        price: product["price"],
        qty: 1,
      };
    } else {
      cart.data[this.dataset.id]["qty"]++;
    }

    // Save local storage + HTML update
    cart.save();
    cart.list();
  },

  list: function () {
    // list() : update HTML

    var container = document.getElementById("cart-list"),
      item = null,
      part = null,
      product = null;
    container.innerHTML = "";

    // Empty  cart
    var isempty = function (obj) {
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          return false;
        }
      }
      return true;
    };
    if (isempty(cart.data)) {
      item = document.createElement("div");
      item.innerHTML = "Cart is empty";
      container.appendChild(item);
    }

    // Not empty
    else {
      // List items
      var total = 0,
        subtotal = 0;
      for (var i in cart.data) {
        item = document.createElement("div");
        item.classList.add("c-item");
        product = cart.data[i];

        // Quantity
        part = document.createElement("input");
        part.type = "number";
        part.value = product["qty"];
        part.dataset.id = i;
        part.classList.add("c-qty");
        part.addEventListener("change", cart.change);
        item.appendChild(part);

        // Name
        part = document.createElement("span");
        part.innerHTML = product["name"];
        part.classList.add("c-name");
        item.appendChild(part);

        // Subtotal
        subtotal = product["qty"] * product["price"];
        total += subtotal;

        container.appendChild(item);
      }

      // EMPTY BUTTONS
      item = document.createElement("input");
      item.type = "button";
      item.value = "Empty";
      item.addEventListener("click", cart.reset);
      item.classList.add("c-empty");
      container.appendChild(item);

      // CHECKOUT BUTTONS
      item = document.createElement("input");
      item.type = "button";
      item.value = "Checkout - " + "$" + total;
      item.addEventListener("click", cart.checkout);
      item.classList.add("c-checkout");
      container.appendChild(item);
    }
  },

  change: function () {
    // change() : change quantity

    if (this.value == 0) {
      delete cart.data[this.dataset.id];
    } else {
      cart.data[this.dataset.id]["qty"] = this.value;
    }
    cart.save();
    cart.list();
  },

  reset: function () {
    // reset() : empty cart

    if (confirm("Empty cart?")) {
      cart.data = {};
      cart.save();
      cart.list();
    }
  },

  checkout: function () {
    // checkout() : checkout the cart

    alert("Jane Francis N @Hike Cafe");
  },
};

// Load previous cart and update HTML on load
window.addEventListener("load", function () {
  cart.load();
  cart.list();
});
