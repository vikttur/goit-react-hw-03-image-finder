import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ id, src, alt }) {
  <li className={css.galleryItem}>
    <img className={css.galleryImage} src={src} alt={alt} />
  </li>;
}

ImageGalleryItem.PropTypes = {
  id: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
