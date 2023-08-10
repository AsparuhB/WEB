const section = document.querySelector("section");
const button = document.querySelector("button");

const div = document.querySelector("div:last-of-type")

// section.style.backgroundColor = "blue";

section.className = "red-bg";

button.addEventListener("click", () => {
  //   if (section.className === "red-bg visible") {
  //     section.className = "red-bg invisible";
  //   } else {
  //     section.className = "red-bg visible";
  //   }

  // section.classList.toggle("visible");
  section.classList.toggle("invisible");
});

const slapIt = document.querySelector("#slap");
const input = document.querySelector("input");

slapIt.addEventListener("click", () => {
    const textValue = input.value;
    div.innerHTML =`<p class="newText">${textValue}</p>`;
})

const reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
  document.location.reload();
});


const inputId = document.getElementById('input-id');
inputId.addEventListener('keydown', function onEvent(e) {
    if (e.keyCode === 13) {
        const textValue = input.value;
    div.innerHTML =`<p class="newText">${textValue}</p>`;
    }
});