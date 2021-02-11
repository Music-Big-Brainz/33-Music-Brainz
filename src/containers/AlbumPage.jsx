import React, { Component } from 'react';
import AlbumList from '../components/albums/AlbumList';
import { findAlbumsByArtistId } from '../services/musicBrainzAPI';

export default class AlbumPage extends Component {
  state = {
    albumId: this.match.params.id,
    albums: [],
    loading: true,
  }

  componentDidMount() {
    findAlbumsByArtistId(this.state.albumId)
      .then((albums) => {
        this.setState({ albums, loading: false });
      });
  }

  render(){
    const { albums } = this.state;
    return ( 
      <>
        <AlbumList albums={albums} />
      </>
    );
  }
}
