import React from 'react';
import PropTypes from 'prop-types';
import Recording from './Recording';
import { useParams } from 'react-router-dom';

const RecordingList = ({ recordings }) => {
  const { title } = useParams();
  const recordingElements = recordings.map(recording => (
    <li key={recording.id}>
      <Recording {...recording} />
    </li>
  ));

  return (
    <>
      <h1>{title}</h1>
      <ul>{recordingElements}</ul>;
    </>
  );
};

RecordingList.propTypes = {
  recordings: PropTypes.arrayOf(
    PropTypes.shape({
      recordingId: PropTypes.string.isRequired,
      songTitle: PropTypes.string.isRequired
    })
  )
};

export default RecordingList;
