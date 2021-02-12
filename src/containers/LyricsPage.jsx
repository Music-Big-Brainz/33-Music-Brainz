import React, { Component } from 'react';
import { findLyricsByAristAndRecording } from '../services/musicBrainzAPI';
import Lyrics from '../components/lyrics/Lyrics';

export default class LyricsPage extends Component {
  state = {
    lyrics: [],
    loading: true,
  }

  componentDidMount() {
    findLyricsByAristAndRecording(
      this.props.match.params.name, 
      this.props.match.params.songTitle
    )
      .then((lyrics) => {
        this.setState({ lyrics, loading: false });
      });
  }

  render(){
    const { lyrics } = this.state;
    return (
      <>
        <Lyrics lyrics={lyrics} song={this.props.match.params.songTitle} />
      </>
    );
  }
}
