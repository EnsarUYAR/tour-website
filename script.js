const input = document.querySelector("#search-input");
const button = document.querySelector("#search-button");

input.addEventListener("keyup", (e) => {
  if (e.target.value.length > 10) {
    button.style.transform = 'scale(1.2)'
  }
});
