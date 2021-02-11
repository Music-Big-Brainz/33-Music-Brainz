import React from 'react';
import PropTypes from 'prop-types';
import Artist from './Artist';

const ArtistList = ({ artists }) => {
  const artistElements = artists.map(artist => (
    <li key={artist.artistId}>
      <Artist 
        name={artist.name}
        disambiguation={artist.disambiguation}
        artistId={artist.artistId}
      />
    </li>
  ));

  return <ul>{artistElements}</ul>;
};

ArtistList.propTypes = {
  artists: PropTypes.arrayOf(
    PropTypes.shape({
      artistId: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      disambiguation: PropTypes.string.isRequired,
    })
  )
};

export default ArtistList;
