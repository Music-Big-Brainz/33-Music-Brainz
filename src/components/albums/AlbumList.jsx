import React from 'react';
import PropTypes from 'prop-types';
import Album from './Album';

const AlbumList = ({ releases }) => {
  const albumElements = releases.map(release => (
    <li key={release.id}>
      <Album {...release} />
    </li>
  ));

  return <ul data-testid="albums">{albumElements}</ul>;
};

AlbumList.propTypes = {
  releases: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    })
  )
};

export default AlbumList;
