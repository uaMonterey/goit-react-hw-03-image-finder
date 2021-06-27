import Loader from 'react-loader-spinner';
import React, { Component } from 'react';

class OnLoader extends Component {
  render() {
    return <Loader type="Rings" color="#00bfff" height={100} width={100} />;
  }
}
export default OnLoader;
