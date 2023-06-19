import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

export default function ImageGallery({ images }) {
  <ul className={css.imageGallery}>
    {images.map(({ id, src, alt }) => {
      return (
        <ImageGalleryItem
          key={id}
          id={id}
          src={src}
          alt={alt}
          // onDeleteContact={onDeleteContact}
        />
      );
    })}
  </ul>;
}

ImageGallery.PropTypes = {
  images: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
  // onDeleteContact: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
};
