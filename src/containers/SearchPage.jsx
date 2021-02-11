import React, { Component } from 'react';
import ArtistList from '../components/artists/ArtistList';
import Search from '../components/search/Search';
import { findArtistByName } from '../services/musicBrainzAPI';

export default class SearchPage extends Component {
  state = {
    search: 'Prince',
    artists: [],
    loading: true,
  }

  componentDidMount() {
    findArtistByName(this.state.search)
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
    findArtistByName(search)
      .then((artists) => {
        this.setState({ artists, loading: false });
      });
  }

  render(){
    const { search, artists } = this.state;
    return ( 
      <>
        <Search 
          value={search} 
          onSubmit={this.onSubmit} 
          onChange={this.onChange} />
        <ArtistList artists={artists} />
      </>
    );
  }
}
