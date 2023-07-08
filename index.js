/** @format */
const dropDownDiv = document.querySelector(".dropdown");
const dropBtn = document.querySelector(".dropbtn");
const myDropdown = document.getElementById("myDropdown");

function showDropdown() {
  myDropdown.classList.toggle("show");
}

dropBtn.addEventListener("click", showDropdown);

// if click is outside of div container, hide dropdown
window.addEventListener("click", (e) => {
  const divDimensions = dropDownDiv.getBoundingClientRect();
  if (myDropdown.classList.contains("show")) {
    if (
      e.clientX < divDimensions.left ||
      e.clientX > divDimensions.right ||
      e.clientY < divDimensions.top ||
      e.clientY > divDimensions.bottom
    ) {
      showDropdown();
    }
  }
});
