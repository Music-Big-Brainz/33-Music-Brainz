import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import albumPage from '../fixtures/artistPage.json';
import AlbumPage from './AlbumPage';
import { MemoryRouter } from 'react-router-dom';
//global.fetch = require('node-fetch');

const server = setupServer (
  rest.get('http://musicbrainz.org/ws/2/release?artist=070d193a-845c-479f-980e-bef15710653e&fmt=json',
    (req, res, ctx) => {
      return res(ctx.json(albumPage));
    })
);

describe('AlbumPage container', () => {
//   act(async() => {
      
  beforeAll(() => server.listen());
  afterAll(() => server.close());
  //   });
  
  it('displays an album page', async() => {
    

      
    render(
      <MemoryRouter>
        <AlbumPage match={{ params: { artistId: '070d193a-845c-479f-980e-bef15710653e' } }}/>
      </MemoryRouter>
    );

 

    const listOfAlbums = await screen.findByTestId('albums');
    
    return waitFor(() => {
      expect(listOfAlbums).not.toBeEmptyDOMElement();

      
    });
  });
});
