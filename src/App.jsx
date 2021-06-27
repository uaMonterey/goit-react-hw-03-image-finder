import React, { Component } from 'react';

//components
import Container from './components/Container';
import Searchbar from 'components/Searchbar';
import Modal from './components/Modal';
import ImageGallery from './components/ImageGallery';
import ImageGalleryItem from './components/ImageGalleryItem';
import Button from './components/Button';
import Loader from './components/Loader';
import { API } from './services/API';

class App extends Component {
  state = {
    images: [],
    searchQuery: '',
    currentPage: 1,
    largeImageURL: '',
    showModal: false,
    isLoading: false,
    error: null,
    apiKey: '20675292-983eeb99019a7539d0696693a',
    contentType: 'image_type=photo&orientation=horizontal',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.onLoadMore();
    }
  }

  onSubmit = query => {
    this.setState({
      images: [],
      searchQuery: query,
      currentPage: 1,
      error: null,
    });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  handleClick = image => {
    this.toggleModal();
    this.setState({ largeImageURL: image });
  };

  onLoadMore = () => {
    const { searchQuery, currentPage, apiKey, contentType } = this.state;

    const options = { currentPage, searchQuery, apiKey, contentType };

    this.setState({ isLoading: true });

    API(options)
      .then(({ data }) => {
        console.log(options);
        this.setState(prevState => ({
          images: [...prevState.images, ...data.hits],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => {
        this.setState({ isLoading: false });
        window.scrollTo({
          top: document.querySelector('#imageGallery').scrollHeight,
          behavior: 'smooth',
        });
      });
  };

  render() {
    const { images, showModal, largeImageURL, isLoading } = this.state;
    console.log(this.state.searchQuery);
    return (
      <Container>
        <Searchbar onSubmit={this.onSubmit} />

        {images.length > 0 && (
          <ImageGallery>
            <ImageGalleryItem images={images} onClick={this.handleClick} />
          </ImageGallery>
        )}

        {isLoading && <Loader />}

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImageURL} alt="" />
          </Modal>
        )}

        {images.length > 0 && <Button onClick={this.onLoadMore} />}
      </Container>
    );
  }
}

export default App;
