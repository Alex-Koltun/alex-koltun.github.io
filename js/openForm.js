(function() {
  let body = document.body;
  let bodyCopy = document.body;
  let signOpen = document.querySelector('.sign-in-block');
  let templateBlock = document.querySelector('#user-form');
  let formElement = templateBlock.cloneNode(true);

  function openForm(evt) {
    evt.preventDefault();

    body = '';
    body.appendChild(formElement);
  }

  signOpen.addEventListener('click', openForm)
})();
