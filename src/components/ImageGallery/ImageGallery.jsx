import React from 'react';
import PropTypes from 'prop-types';
import s from './ImageGallery.module.css';

const ImageGallery = ({ children }) => (
  <ul id="imageGallery" className={s.imageGallery}>
    {children}
  </ul>
);

ImageGallery.propTypes = {
  children: PropTypes.object.isRequired,
};

export default ImageGallery;
