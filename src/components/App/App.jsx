import css from './App.module.css';
// import Button from '../Button/Button';
// import ImageGallery from '../ImageGallery/ImageGallery';
// import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
// import Loader from '../Loader/Loader';
// import Modal from '../Modal/Modal';
// import Searchbar from '../Searchbar/Searchbar';
// import SearchForm from '../SearchForm/SearchForm';

export default function App() {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
      className={css.App}
    >
      React homework template
    </div>
  );
}
