import React from 'react';
import PropTypes from 'prop-types';
import Recording from './Recording';
import { useParams } from 'react-router-dom';

const RecordingList = ({ recordings, name, albumId }) => {
  const { title } = useParams();
  const recordingElements = recordings.map(recording => (
    <li key={recording.id}>
      <Recording {...recording} name={name} albumId={albumId} />
    </li>
  ));

  return (
    <>
      <h1 >{title}</h1>
      <ul data-testid="recordings" >{recordingElements}</ul>;
    </>
  );
};

RecordingList.propTypes = {
  name: PropTypes.string.isRequired,
  albumId: PropTypes.string.isRequired,
  recordings: PropTypes.arrayOf(
    PropTypes.shape({
      recordingId: PropTypes.string.isRequired,
      songTitle: PropTypes.string.isRequired
    })
  )
};

export default RecordingList;

