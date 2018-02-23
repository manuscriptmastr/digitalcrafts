var body = document.querySelector('body');
var galleryList = document.querySelector('.gallery__list');
var lightbox = document.querySelector('.lightbox');
var lightboxLayout = document.querySelector('.lightbox__layout');
var lightboxClose = document.querySelector('.lightbox__close');

var images = [
  {
    src: 'https://images.pexels.com/photos/158163/clouds-cloudporn-weather-lookup-158163.jpeg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb',
    alt: 'Clouds 1'
  },
  {
    src: 'https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb',
    alt: 'Clouds 2'
  },
  {
    src: 'https://images.pexels.com/photos/55787/pexels-photo-55787.jpeg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb',
    alt: 'Clouds 3'
  },
  {
    src: 'https://images.pexels.com/photos/37728/pexels-photo-37728.jpeg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb',
    alt: 'Clouds 4'
  },
  {
    src: 'https://images.pexels.com/photos/844297/pexels-photo-844297.jpeg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb',
    alt: 'Clouds 5'
  },
  {
    src: 'https://images.pexels.com/photos/97558/pexels-photo-97558.jpeg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb',
    alt: 'Clouds 6'
  }
];

var createImg = function(obj) {
  var img = document.createElement('img');
  img.src = obj.src;
  img.alt = obj.alt;

  return img;
}

var createLightboxBtn = function(action) {
  var a = document.createElement('a');
  a.classList.add(`lightbox__${action}`);
  a.href = '#';

  return a;
}

var createGalleryItem = function(obj) {
  var li = document.createElement('li');
  li.classList.add('gallery__item');

  var img = createImg(obj);
  img.classList.add('gallery__img');
  li.appendChild(img);

  return li;
}

var armImg = function(node) {
  node.addEventListener('click', function(e) {
    var elem = e.target;
    var src = elem.src;
    lightboxImg.src = src;

    turnLightbox('on');
  });
}

var galleryItems = images.map(function(obj) {
  return createGalleryItem(obj);
});

galleryItems.forEach(function(node) {
  galleryList.appendChild(node);

  var img = node.querySelector('.gallery__img');
  armImg(img);
});

var lightboxImg = createImg(images[0]);
lightboxImg.classList.add('lightbox__img');

var lightboxNext = createLightboxBtn('next');
var lightboxPrev = createLightboxBtn('prev');

var lightboxElements = [lightboxPrev, lightboxImg, lightboxNext];

lightboxElements.forEach(function(node) {
  lightboxLayout.appendChild(node);
});