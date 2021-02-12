import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Album = ({ albumId, title, date }) => (
  <Link to={`/releases/title/${albumId}/${title}`}>
    <figure key={albumId}>
      <p>{title}</p>
      <p>{date}</p>
      <img 
        src={`http://coverartarchive.org/release/${albumId}/front`}
        alt="No album art"
        style={{ width: '175px' }} />
    </figure>
  </Link>
);

Album.propTypes = {
  albumId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Album;
