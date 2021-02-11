export const findPrince = () => {
  return fetch('http://musicbrainz.org/ws/2/artist?query=prince&fmt=json&limit=25'
  )
    .then((res)  => res.json())
    .then(({ artists }) =>
      artists.map((artist) => ({
        id: artist.id,
        name: artist.name,
        disambiguation: artist.disambiguation,
      })));
};

export const findArtistByName = (artist) => {
  return fetch(
    `http://musicbrainz.org/ws/2/artist?query=${artist}&fmt=json&limit=25`
  )
    .then((res) => res.json())
    .then(({ artists }) =>
      artists.map((artist) => ({
        id: artist.id,
        name: artist.name,
        disambiguation: artist.disambiguation,
      }))
    );
};