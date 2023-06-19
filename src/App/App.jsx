import React, { Component } from 'react';
import css from './App.module.css';

// import ImageGallery from '../ImageGallery/ImageGallery';
import Searchbar from '../components/Searchbar/Searchbar';
import Button from '../components/Button/Button';
import Modal from '../components/Modal/Modal';
import Loader from '../components/Loader/Loader';

export default class App extends Component {
  state = {
    showModal: false,
  };

  componentDidMount() {
    // console.log('Modal componentDidMount');
    fetch(
      'https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12'
    )
      .then(res => res.json())
      .then(console.log);
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
        <Searchbar onSubmit={this.toggleModal} />
        <Button onClick={this.toggleModal}>Lean more</Button>

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src="" alt="ТУТ КАРТИНКА" />
          </Modal>
        )}

        <Loader isVisible={!true} />
      </>
    );
  }
}
