import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Recording = ({ recordingId, songTitle, name, albumId }) => {
  return (
    <Link to={`/releases/${name}/title/${albumId}/${songTitle}/${songTitle}`}>
      <figure key={recordingId}>
        <p>{songTitle}</p>
      </figure>
    </Link>
  );
};

Recording.propTypes = {
  name: PropTypes.string.isRequired,
  albumId: PropTypes.string.isRequired,
  recordingId: PropTypes.string.isRequired,
  songTitle: PropTypes.string.isRequired,
};

export default Recording;
