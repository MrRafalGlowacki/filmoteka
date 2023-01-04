const openBtn = document.querySelector('.footer__authors');
const modal = document.querySelector('[data-modal]');
openBtn.addEventListener('click', toggleModal);
open.style
function toggleModal() {
  modal.classList.toggle('is-hidden');
}

// (() => {
//     const refs = {
//       openModalBtn: document.querySelector(".footer__authors"),
//     //   closeModalBtn: document.querySelector("[data-modal-close]"),
//       modal: document.querySelector("[data-modal]"),
//     };

//     refs.openModalBtn.addEventListener("click", toggleModal);
//     // refs.closeModalBtn.addEventListener("click", toggleModal);

//     function toggleModal() {
//       refs.modal.classList.toggle("is-hidden");
//     }

//   })();
