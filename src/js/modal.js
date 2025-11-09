(() => {
  const refs = {
    // Елемент форми, який потрібно прослуховувати
    subscribeForm: document.querySelector('.subscribe-form'),
    // Додати атрибут data-modal-close на кнопку закриття (залишається)
    closeModalBtn: document.querySelector('[data-modal-close]'),
    // Додати атрибут data-modal на бекдроп модалки (залишається)
    modal: document.querySelector('[data-modal]'),
    // Поле введення email
    emailInput: document.getElementById('subscribe-email'),
  };


  refs.subscribeForm.addEventListener('submit', handleFormSubmit);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-open');
  }

  function handleFormSubmit(event) {
    event.preventDefault(); 
    if (refs.emailInput.checkValidity()) {
      toggleModal();
    } else {
      console.log('Поле Email не заповнене або не валідне.');
    }
  }
})();