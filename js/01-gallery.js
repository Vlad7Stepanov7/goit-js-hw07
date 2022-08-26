import { galleryItems } from './gallery-items.js';
// Change code below this line


// сделал разметку фото
const murkupImage = galleryItems => {
    const { preview, original, description } = galleryItems;
    return `
<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
    `;
};
// добавил разметку галереи
const gallery = document.querySelector(`.gallery`);

const galleryMurkup = galleryItems.map(murkupImage).join(` `);

gallery.insertAdjacentHTML(`afterbegin`, galleryMurkup);

// сделал делегирование
gallery.addEventListener(`click`, onBtnClickOpenOriginalImage);

function onBtnClickOpenOriginalImage(event) {
  event.preventDefault();
// проверяем клик на шьп
  if (event.target.nodeName !== "IMG") {
    return
  }
  // открытие модалки
  const instance = basicLightbox.create(`
  <img src="${event.target.dataset.source}">
  `);
  instance.show();
  
  gallery.addEventListener(`keydown`, (evt) => {
    if (evt.code === `Escape`) {
      instance.close();
    }
  });

};



// function onKeyDownEsc(evt) {
//   console.log(evt.code === `Escape`);
//   if (evt.code === `Escape`) {
//     instance.close();
//   }
// };

