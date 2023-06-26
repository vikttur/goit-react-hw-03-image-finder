import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

export default function ImageGallery({ images }) {
  // console.log(images.length);
  return (
    <ul className={css.gallery}>
      {images.map(({ id, webformatURL }) => {
        return <ImageGalleryItem key={String(id)} id={id} src={webformatURL} />;
      })}
    </ul>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
};
