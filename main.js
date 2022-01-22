var imageUrls = [
  // 'https://s3.amazonaws.com/rails-camp-tutorials/blog/programming+memes/states-of-a-programmer.png',
  // 'https://cms.qz.com/wp-content/uploads/2018/07/meme-featured.jpg?quality=75&strip=all&w=900&h=900&crop=1',
  // 'https://sayingimages.com/wp-content/uploads/dont-worry-you-got-this-motivational-memes.jpg',
  // 'https://ichef.bbci.co.uk/news/976/cpsprodpb/F1F2/production/_118283916_b19c5a1f-162b-410b-8169-f58f0d153752.jpg',
  // 'https://thumbor.granitemedia.com/brain-painting-meme/t_woDEMlCM4Oe6JwwEsWDNOGOBA=/800x798/filters:format(webp):quality(80)/granite-web-prod/a0/51/a0518a49dc0b463898599aefec77f6d0.jpeg'
];

var imageUrlInput = document.querySelector('input');
var addImageButton = document.querySelector('button');
var gallery = document.querySelector('main');

addImageButton.addEventListener('click', submitImg);

function submitImg() {
  if (imageUrlInput !== '') {
    imageUrls.push(imageUrlInput.value);
  }
  imageUrlInput.value = '';
  updateGallery();
}

function updateGallery() {
  gallery.innerHTML = '';
  for (let i = 0; i < imageUrls.length; i++) {
    var imageElement = document.createElement('img');
    imageElement.className = 'gallery-image';
    imageElement.src = imageUrls[i];
    gallery.appendChild(imageElement);
  }
}

updateGallery();
