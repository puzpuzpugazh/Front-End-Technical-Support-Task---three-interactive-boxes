const cartCategoryTitle = document.querySelectorAll(".cartCategoryTitle");
const cartCategoryContentEl = document.querySelectorAll(".cartCategoryContent");
const totalEl = document.querySelector(".total");

//? handle close if any category is open
function handleClose() {
  cartCategoryContentEl.forEach((el) => {
    if (el.style.display == "block") {
      el.style.display = "none";
      el.parentElement.classList.remove("active");
    }
    return;
  });
}

cartCategoryTitle.forEach((button) => {
  button.addEventListener("click", () => {
    //? handle radio selection
    button.firstElementChild.childNodes.forEach((el) => {
      if (el.type == "radio") {
        el.checked = true;
      }
    });

    const selectedDiscountPrice = button.querySelector(".discountPrice");
    totalEl.innerHTML = `Total : ${selectedDiscountPrice.textContent}`;

    const cartCategoryContent = button.nextElementSibling; // category content element

    // handle expansion of each element
    //? close if open
    if (cartCategoryContent.style.display == "block") {
      
      handleClose();
      cartCategoryContent.style.display = "none";
      return;
    } //? open if close
    else {
      handleClose();
      cartCategoryContent.style.display = "block";
      button.parentElement.classList.add("active");
      return;
    }
  });
});
