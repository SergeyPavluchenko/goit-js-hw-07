import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');
const addGalleryMarkup = createGalleryMarkup(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', addGalleryMarkup);

function createGalleryMarkup(items) {
    return items
    .map((item) => `<div class="gallery__item">
                            <a class="gallery__link" href="${item.original}">
                                <img
                                class="gallery__image"
                                src="${item.preview}"
                                data-source="${item.original}"
                                alt="${item.description}"
                                />
                            </a>
                        </div>`
    )
        .join('');
}

galleryRef.addEventListener('click', onGallery);

function onGallery(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG')
        return;

    // const orinalImage = event.target.dataset.source;

    const instance = basicLightbox.create(`<img src="${event.target.dataset.source}" width="800" height="600">`)

    instance.show();

    galleryRef.addEventListener('keydown', (event) => {
        if (event.code === 'Escape') {
            instance.close();
        }
    })
};
