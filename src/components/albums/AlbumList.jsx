import React from 'react';
import PropTypes from 'prop-types';
import Album from './Album';


const AlbumList = ({ releases, name }) => {
  const albumElements = releases.map(release => (

    <li key={release.id}>
      <Album {...release} />
    

      <li key={release.albumId}>
        <Album {...release} name={name} />
      </li>
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
