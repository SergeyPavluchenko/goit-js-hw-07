import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');
const addGalleryMarkup = createGalleryMarkup(galleryItems);

galleryRef.innerHTML = addGalleryMarkup;

function createGalleryMarkup(items) {
    return items
        .map((item) => `<li class="gallery__item"><a class="gallery__link" href="${item.original}">
            <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
            </a></li>`
        )
        .join('');
}

const simple = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionsData: 'alt'
});

