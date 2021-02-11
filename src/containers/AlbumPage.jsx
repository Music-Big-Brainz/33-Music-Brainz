/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import AlbumList from '../components/albums/AlbumList';
import { findAlbumsByArtistId } from '../services/musicBrainzAPI';

export default class AlbumPage extends Component {
  state = {
    albums: [],
    loading: true
  }

  componentDidMount() {
    findAlbumsByArtistId(this.props.match.params.artistId)
      .then((albums) => {
        this.setState({ albums, loading: false });
      });
  }

  render(){
    const { albums } = this.state;
    console.log(albums);
    return ( 
      <>
        <AlbumList releases={albums} />
      </>
    );
  }
}
