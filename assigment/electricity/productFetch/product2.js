async function getProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();

    const productList = document.getElementById("productRow");
    productList.innerHTML = "";

    data.forEach((element) => {
      const col = document.createElement("div");
      col.className = "col-lg-3 col-md-4 col-sm-6 p-2"; // responsive row

      col.innerHTML = `
        <div class="card h-100 shadow">
          <img 
            src="${element.image}" 
            class="card-img-top p-3"
            style="height:200px; object-fit:contain"
            alt="${element.title}"
          />

          <div class="card-body d-flex flex-column">
            <h6 class="fw-bold">
              ${
                element.title.length > 45
                  ? element.title.slice(0, 45) + "..."
                  : element.title
              }
            </h6>

            <p class="mb-1">
              ⭐ ${element.rating.rate} (${element.rating.count})
            </p>

            <h5 class="text-success">₹ ${element.price * 100}</h5>

            <p class="small text-muted">
              ${element.description.slice(0, 70)}...
            </p>

            <div class="mt-auto d-flex gap-2">
              <button class="btn btn-outline-primary w-50">
                Add to Cart
              </button>
              <button class="btn btn-primary w-50">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      `;

      productList.appendChild(col);
    });
  } catch (error) {
    console.log(error.message);
  }
}

getProducts();
