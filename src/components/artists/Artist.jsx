import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Artist = ({ artistId, name, disambiguation }) => (
  <Link to={`/releases/${artistId}`}>
    <figure>
      <p>{name}</p>
      <p>{disambiguation}</p>
    </figure>
  </Link>
);

Artist.propTypes = {
  artistId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  disambiguation: PropTypes.string.isRequired,
};

export default Artist;
