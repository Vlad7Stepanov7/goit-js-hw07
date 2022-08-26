import { galleryItems } from './gallery-items.js';
// Change code below this line

const murkupImage = galleryItems => {
    const { preview, original, description } = galleryItems;
    return `
  <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" title="${description}" />
  </a>
    `;
};
// добавил разметку галереи
const gallery = document.querySelector(`.gallery`);

const galleryMurkup = galleryItems.map(murkupImage).join(` `);

gallery.insertAdjacentHTML(`afterbegin`, galleryMurkup);

gallery.addEventListener(`click`, (e) => {
    e.preventDefault();
    if (e.target.nodeName !== `IMG`) {
        return
    }
    
    const lightbox = new SimpleLightbox(`.gallery__link`, {captionsData: `title`, captionPosition: `bottom`, captionDelay: 250,});
    lightbox.open();
});
