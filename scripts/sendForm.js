const sendForm = () => {
  const btnOpenModal = document.querySelector('.card-details__button_delivery'),
        cardDetailsTitle = document.querySelector('.card-details__title'),
        modal = document.querySelector('.modal'),
        modalTitle = document.querySelector('.modal__title'),
        modalClose = document.querySelector('.modal__close'),
        modalForm = modal.querySelector('form');

  btnOpenModal.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalTitle.textContent = cardDetailsTitle.textContent;
  });

  modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  modalForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const labels = modal.querySelectorAll('.modal__label');

    const sendMessage = {};

    labels.forEach(label => {
      const span = label.querySelector('span'),
            input = label.querySelector('input');

      sendMessage[span.textContent] = input.value;
    });

    fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(sendMessage),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(() => {
      console.log('Отправлено');
    });
  });
};

sendForm();