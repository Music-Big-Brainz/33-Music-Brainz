import React from 'react';
import PropTypes from 'prop-types';

const Lyrics = ({ lyrics, song }) => (
  <div>
    <h1>{song}</h1>
    <p data-testid="lyrics">{lyrics}</p>
  </div>
);

Lyrics.propTypes = {
  song: PropTypes.string.isRequired,
  lyrics: PropTypes.string.isRequired
};

export default Lyrics;
