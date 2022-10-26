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
 
// проверяем клик на IMG
  if (event.target.nodeName !== "IMG") {
    return
  }
  // открытие модалки, вешаем и снимаем событие в зависимости от того открыта ли модалка
  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}">`,
    {
      onShow: instance => {
        window.addEventListener(`keydown`, onEscPress);
      },
      onClose: instance => {
        window.removeEventListener(`keydown`, onEscPress);
      }
    });
  
  function onEscPress(evt) {
    if (evt.code === `Escape`) {
      instance.close();
      console.log(`Hi`);
    }
  }

  instance.show();
};



