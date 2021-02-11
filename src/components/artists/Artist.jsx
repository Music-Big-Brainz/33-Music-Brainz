import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Artist = ({ id, name, disambiguation }) => (
  <Link to={`${id}`}>
    <figure>
      <p>{name}</p>
      <p>{disambiguation}</p>
    </figure>
  </Link>
);

Artist.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  disambiguation: PropTypes.string.isRequired,
};

export default Artist;
