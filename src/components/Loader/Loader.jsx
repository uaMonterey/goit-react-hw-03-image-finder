import Loader from 'react-loader-spinner';
import React, { Component } from 'react';
import s from './Loader.module.css';

class OnLoader extends Component {
  render() {
    return (
      <Loader
        className={s.Loader}
        type="Rings"
        color="#00bfff"
        height={200}
        width={200}
      />
    );
  }
}
export default OnLoader;
