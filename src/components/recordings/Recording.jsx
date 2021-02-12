import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Recording = ({ recordingId, songTitle }) => {
  return (
    <Link to={`${recordingId}`}>
      <figure>
        <p>{songTitle}</p>
      </figure>
    </Link>
  );
};

Recording.propTypes = {
  recordingId: PropTypes.string.isRequired,
  songTitle: PropTypes.string.isRequired,
};

export default Recording;
