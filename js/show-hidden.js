(function() {
  let blockOrder = document.querySelector('#sign-in');
  let targetBlock = blockOrder.querySelector('.pushcart-block');
  let showBlock = blockOrder.querySelector('.sign-in-box');
  let closeBlock = blockOrder.querySelector('.close-box');
  let showHeight = document.body.clientHeight;


  function open(target, show) {
    target.classList.add('hidden');
    show.classList.remove('hidden');
   };

   function closed(target, show) {
      show.classList.add('hidden');
      targetBlock.classList.remove('hidden');
    };


  targetBlock.addEventListener('click', function(evt) {
    blockOrder.style.backgroundColor = 'rgba(240, 240, 240, 0.95)';
    blockOrder.style.height = showHeight + 'px';
    blockOrder.style.alignItems = 'flex-start';
    blockOrder.style.zIndex = '999';
    open(targetBlock, showBlock)
  });

  closeBlock.addEventListener('click', function(evt) {
    blockOrder.style.backgroundColor ="";
    blockOrder.style.height = "";
    blockOrder.style.alignItems = "";
    closed(closeBlock, showBlock)
  });
})();

// Show/Hidden password
(function() {
  let passwordBlock = document.querySelector('#password');
  let passwordShow = document.querySelector('#showPassword');


  function showPassword(event) {
    event.preventDefault();
    const element = passwordBlock;

    if (!element.value) {
      return;
    }

    if (element.getAttribute('type') === 'password') {
      element.setAttribute('type', 'text');
    } else {
      element.setAttribute('type', 'password');

    }
  }
    passwordShow.addEventListener('click', showPassword)

})();
