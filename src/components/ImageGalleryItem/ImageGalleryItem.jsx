import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ images, onClick }) =>
  images.map(({ id, webformatURL, largeImageURL, tags }) => (
    <li className="ImageGalleryItem" key={id}>
      <img
        src={webformatURL}
        alt={tags}
        className={s.ImageGalleryItem__image}
        onClick={() => {
          onClick(largeImageURL);
        }}
      />
    </li>
  ));

export default ImageGalleryItem;
