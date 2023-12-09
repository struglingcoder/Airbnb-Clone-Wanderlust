
let taxSwitch = document.getElementById("flexSwitchCheckDefault");

taxSwitch.addEventListener("click", () => {
  let taxInfo = document.getElementsByClassName("tax-info");
  let priceInfo = document.getElementsByClassName("price-info");
  for (info of taxInfo) {
    if (info.style.display != "inline") {
      info.style.display = "inline";
    } else {
      info.style.display = "none";
    }
  }

  for (price of priceInfo) {
    if (price.style.display != "none") {
      price.style.display = "none";
    } else {
      price.style.display = "inline";
    }
  }
});


// taxSwitch for media queries
let taxSwitch1 = document.getElementById("flexSwitchCheckDefault1");

taxSwitch1.addEventListener("click", () => {
  let taxInfo = document.getElementsByClassName("tax-info");
  let priceInfo = document.getElementsByClassName("price-info");
  for (info of taxInfo) {
    if (info.style.display != "inline") {
      info.style.display = "inline";
    } else {
      info.style.display = "none";
    }
  }

  for (price of priceInfo) {
    if (price.style.display != "none") {
      price.style.display = "none";
    } else {
      price.style.display = "inline";
    }
  }
});

// filters

let filters = document.querySelectorAll(".filter");

filters.forEach((filter) => {
  filter.addEventListener("click", async () => {
    let category = filter.getAttribute("data-category");
    console.log(category);
  });
});


// scroll js
function scrollFilters(direction) {
  const container = document.getElementById("filters");
  const scrollAmount = 200; // Adjust the scroll amount as needed
  if (direction === "right") {
    container.scrollLeft += scrollAmount;
  } else {
    container.scrollLeft -= scrollAmount;
  }
}