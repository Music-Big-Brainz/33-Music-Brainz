export const findArtistByName = (search) => {
  return fetch(
    `http://musicbrainz.org/ws/2/artist?query=${search}&fmt=json&limit=25`
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
