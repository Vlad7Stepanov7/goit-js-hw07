import { galleryItems } from './gallery-items.js';
// Change code below this line

const murkupImage = galleryItems => {
    const { preview, original, description } = galleryItems;
    return `
  <a class="gallery__link" rel="rel2" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" title="${description}" />
  </a>
    `;
};
// добавил разметку галереи
const gallery = document.querySelector(`.gallery`);

const galleryMurkup = galleryItems.map(murkupImage).join(` `);

gallery.insertAdjacentHTML(`afterbegin`, galleryMurkup);

// инициализация библиотеки
const lightbox = new SimpleLightbox(`.gallery__link`, { captionsData: `title`, captionPosition: `bottom`, captionDelay: 250, });

// открытие модалки по клику
gallery.addEventListener(`click`, (e) => {
  e.preventDefault();
  
    if (e.target.nodeName !== `IMG`) {
        return
    }

    lightbox.open(`.gallery__link`);
});
