import React, { Component } from 'react';
import ArtistList from '../components/artists/ArtistList';
import Search from '../components/search/Search';
import { findArtistByName, findPrince } from '../services/musicBrainzAPI';

export default class SearchPage extends Component {
  state = {
    search: '',
    artists: [],
    loading: true,
  }

  async componentDidMount() {
    await findPrince();
    this.setState({ loading: false });
    // .then((artists) => {
    //   this.setState({ artists, loading: false });
    // });
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
        <Search value={search} onSubmit={this.onSubmit} />
        <ArtistList artist={artists} />
      </>
    );
  }
}
