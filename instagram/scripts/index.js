var turnLightbox = function(str) {
  if (str === 'on') {
    body.classList.add('lightbox-is-active');
  } else {
    body.classList.remove('lightbox-is-active');
  }
}

var closeDivs = [lightboxClose,lightboxLayout];

closeDivs.forEach(function(node) {
  node.addEventListener('click', function(e) {
    e.preventDefault();
  
    if(e.target === node) {
      turnLightbox('off');
    }
  });
});

window.addEventListener('keyup', function(e) {
  e.preventDefault();

  if(e.code === 'Escape') {
    turnLightbox('off');
  }
});