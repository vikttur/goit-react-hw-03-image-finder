import React, { Component } from 'react';
// import css from './App.module.css';
import Button from '../Button/Button';
// import ImageGallery from '../ImageGallery/ImageGallery';
// import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
// import Loader from '../Loader/Loader';
import Modal from '../Modal/Modal';
// import Searchbar from '../Searchbar/Searchbar';
// import SearchForm from '../SearchForm/SearchForm';
import { ReactComponent as AddIcon } from '../../icons/add.svg';

export default class App extends Component {
  state = {
    showModal: false,
  };

  componentDidMount() {
    // console.log('Modal componentDidMount');
  }

  componentWillUnmount() {
    // console.log('Modal WillUnmount');
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { showModal } = this.state;

    return (
      <>
        <Button onClick={this.toggleModal}>
          <AddIcon width="80" height="20" fill="blue" />
        </Button>

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <h1>Заголовок</h1>

            <button type="button" onClick={this.toggleModal}>
              Close modal
            </button>
          </Modal>
        )}
      </>
    );
  }
}
