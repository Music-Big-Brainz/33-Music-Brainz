import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../public/assets/MusicBrainz.png';

export default class Header extends Component {
  render(){
    return (
      <>
        <Link to="/">Home Page</Link>
        <img src={Logo} alt="logo" />
      </>
    );
  }
}
