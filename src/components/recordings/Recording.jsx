import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const RecordingList = ({ recordings, name, albumId }) => {
  const { title } = useParams();
  const recordingElements = recordings.map(recording => (
    <li key={recording.id}>
      <Recording {...recording} name={name} albumId={albumId} />
    </li>
  ));

  return (
    <>
      <h1>{title}</h1>
      <ul>{recordingElements}</ul>;
    </>
  );
};

Recording.propTypes = {

  name: PropTypes.string.isRequired,
  albumId: PropTypes.string.isRequired,
  recordingId: PropTypes.string.isRequired,
  songTitle: PropTypes.string.isRequired,
};

export default Recording;
