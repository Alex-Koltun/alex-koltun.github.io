
(function(){
  let header = document.querySelector('header');
  let headerHeight =header.clientHeight;
  let footer = document.querySelector('footer');
  let footerHeight =footer.clientHeight;
  let main = document.querySelector('main') || null;
  let showHeight = document.body.clientHeight;
  let  mainHeight ;

  if(main === null) {
    mainHeight = 0;
    footer.style.position="fixed";
  } else {
    mainHeight = main.clientHeight;
  }

  if (mainHeight  < (showHeight - (footerHeight + headerHeight))) {
    footer.style.position="fixed";
  } else {
    footer.style.position="static";
  }
})()
