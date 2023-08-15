const startAddMovieButton = document.querySelector("header button");
const addMovieModal = document.getElementById("add-modal");
const backdrop = document.getElementById("backdrop");
const cancelButton =
  document.querySelector(".modal__actions").firstElementChild;

const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
};


const toggleMovieModal = () => {
    addMovieModal.classList.toggle("visible");
    toggleBackdrop();
};

const backdropClickHandler = () => {
    toggleMovieModal();
};


startAddMovieButton.addEventListener("click", toggleMovieModal);
backdrop.addEventListener("click", backdropClickHandler);
cancelButton.addEventListener("click", toggleMovieModal);

