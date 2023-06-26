import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ id, src }) {
  return (
    <li className={css.galleryItem}>
      <img className={css.galleryImage} src={src} alt={id} />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
};
