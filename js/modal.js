
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
      // запрет прокрутки страницы при откртытом модальном окне
    body: document.querySelector('[data-body]'),
     // запрет прокрутки страницы при откртытом модальном окне
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
          // запрет прокрутки страницы при откртытом модальном окне
    refs.body.classList.toggle('no-scroll');
          // запрет прокрутки страницы при откртытом модальном окне
  }
})();
