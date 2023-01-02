import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
const cards = renderImg(galleryItems);

galleryEl.insertAdjacentHTML('afterBegin', cards);

function renderImg(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `<a class = 'gallery__item' href = '${original}'>
    <img class='gallery__image' src='${preview}' alt='${description}'>
    </a>`;
    })
    .join('');
}

console.log(galleryEl);

const lightbox = new SimpleLightbox('.gallery a', {
  captionSelector: 'img',
  captionsData: 'alt',
  captionType: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});
