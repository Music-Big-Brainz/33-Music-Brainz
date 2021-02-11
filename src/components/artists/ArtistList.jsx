import React from 'react';
import PropTypes from 'prop-types';
import Artist from './Artist';

const ArtistList = ({ artists }) => {
  const artistElements = artists.map(artist => (
    <li key={artist.id}>
      <Artist 
        name={artist.name}
        disambiguation={artist.disambiguation}
      />
    </li>
  ));

  return <ul>{artistElements}</ul>;
};

ArtistList.propTypes = {
  artists: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      disambiguation: PropTypes.string.isRequired,
    })
  )
};

export default ArtistList;
