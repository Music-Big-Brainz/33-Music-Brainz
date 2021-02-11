import React, { Component } from 'react';
import ArtistList from '../components/artists/ArtistList';
import findArtistByName from '../services/musicBrainzAPI';

export default class SearchPage extends Component {
  state = {
    search: '',
    artists: [],
    loading: false,
  }

  async componentDidMount() {
    this.setState({ loading: true });
    await findArtistByName()
      .then((artists) => {
        this.setState({ artists, loading: false });
      });
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
        {/* <Search value={search} onSubmit={this.onSubmit} /> */}
        <ArtistList artist={artists} />
      </>
    );
  }

}
