export const findArtistByName = (search) => {
  return fetch(
    `http://musicbrainz.org/ws/2/artist?query=${search}&fmt=json&limit=25`
  )
    .then((res) => res.json())
    .then(({ artists }) =>
      artists.map((artist) => ({
        artistId: artist.id,
        name: artist.name,
        disambiguation: artist.disambiguation || 'Not found'
      }))
    );
};

export const findAlbumsByArtistId = (id) => {
  return fetch(
    `http://musicbrainz.org/ws/2/release?artist=${id}&fmt=json`
  )
    .then((res) => res.json())
    .then(({ releases }) =>
      releases.map((release) => ({
        albumId: release.id,
        date: release.date,
        title: release.title
      }))
    );
};

export const findRecordingsByAlbumId = (id) => {
  return fetch(
    `http://musicbrainz.org/ws/2/recording?release=${id}&fmt=json`
  )
    .then((res) => res.json())
    .then(({ recordings }) => 
      recordings.map((recording) => ({
        recordingId: recording.id,
        songTitle: recording.title
      }))
    );
};

export const findLyricsByAristAndRecording = (artist, recording) => {
  return fetch(
    `https://api.lyrics.ovh/v1/${artist}/${recording}`
  )
    .then((res) => res.json())
    .then(json => json.lyrics);
};

