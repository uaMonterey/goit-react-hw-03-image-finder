import React, { Component } from 'react';
import s from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  onSetQuery = e => {
    this.setState({
      searchQuery: e.currentTarget.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.searchQuery);

    this.reset();
  };

  reset = () => {
    this.setState({ searchQuery: '' });
  };

  render() {
    return (
      <header className={s.searchbar}>
        <form onSubmit={this.handleSubmit} className={s.form}>
          <button
            onSubmit={this.handleSubmit}
            type="submit"
            className={s.button}
          >
            <span className={s.label}>Search</span>
          </button>

          <input
            className={s.input}
            value={this.state.searchQuery}
            type="text"
            autoComplete="off"
            autoFocus
            onChange={this.onSetQuery}
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
