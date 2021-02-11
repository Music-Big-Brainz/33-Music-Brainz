import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Album = ({ albumId, title, date }) => (
  <Link to={`${albumId}`}>
    <figure>
      <p>{title}</p>
      <p>{date}</p>
    </figure>
  </Link>
);

Album.propTypes = {
  albumId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Album;
