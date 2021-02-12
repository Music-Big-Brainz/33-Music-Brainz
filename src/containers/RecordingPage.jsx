/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import RecordingList from '../components/recordings/RecordingList';
import { findRecordingsByAlbumId } from '../services/musicBrainzAPI';

export default class RecordingPage extends Component {
  state = {
    songs: [],
    loading: true
  }

  componentDidMount() {
    findRecordingsByAlbumId(this.props.match.params.albumId)
      .then((songs) => {
        this.setState({ songs, loading: false });
      });
  }

  render(){
    const { songs } = this.state;
    return ( 
      <>
        <RecordingList 
          recordings={songs} 
          name={this.props.match.params.name} 
          albumId={this.props.match.params.albumId}
        />
      </>
    );
  }
}
