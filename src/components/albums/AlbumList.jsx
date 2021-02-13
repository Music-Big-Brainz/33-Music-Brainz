import React from 'react';
import PropTypes from 'prop-types';
import Album from './Album';

<<<<<<< HEAD
const AlbumList = ({ releases }) => {
=======

const AlbumList = ({ releases, name }) => {
>>>>>>> 9f3bac0bb35917b144bc4e6f3c2f061a4f6f9ba5
  const albumElements = releases.map(release => (

    <li key={release.id}>
      <Album {...release} />

    <li key={release.albumId}>
      <Album {...release} name={name} />

    </li>
  ));

  return <ul data-testid="albums">{albumElements}</ul>;
};

AlbumList.propTypes = {
  name: PropTypes.string.isRequired,
  releases: PropTypes.arrayOf(
    PropTypes.shape({
      albumId: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    })
  )
};

export default AlbumList;
