import React, { Component } from 'react';
import ArtistList from '../components/artists/ArtistList';
import Search from '../components/search/Search';
import { findAlbumsByArtistId } from '../services/musicBrainzAPI';

export default class SearchPage extends Component {
  state = {
    albums: [],
    loading: true,
  }

  componentDidMount() {
    findAlbumsByArtistId(this.state.search)
      .then((artists) => {
        this.setState({ artists, loading: false });
      });
  }

  onChange = ({ target }) => {
    this.setState({ search: target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { search, artists } = this.state;
    this.setState({ search, artists, loading: true });
    findAlbumsByArtistId(search)
      .then((artists) => {
        this.setState({ artists, loading: false });
      });
  }

  render(){
    const { search, artists } = this.state;
    return ( 
      <>
        <Search 
          search={search} 
          onSubmit={this.onSubmit} 
          onChange={this.onChange} />
        <ArtistList artists={artists} />
      </>
    );
  }
}
