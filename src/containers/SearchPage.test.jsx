import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import  searchPage  from '../fixtures/searchPage.json';
import SearchPage from './SearchPage';
import { MemoryRouter } from 'react-router-dom';
//global.fetch = require('node-fetch');

const server = setupServer (
  rest.get('http://musicbrainz.org/ws/2/artist?query=prince&fmt=json&limit=25',
    (req, res, ctx) => {
      return res(ctx.json(searchPage));
    })
);

describe('SearchPage container', () => {
//   act(async() => {
      
  beforeAll(() => server.listen());
  afterAll(() => server.close());
  //   });
  
  it('displays a search page', async() => {
    

      
    render(
      <MemoryRouter>
        <SearchPage match={{ params: { artistId: '070d193a-845c-479f-980e-bef15710653e' } }}/>
      </MemoryRouter>
    );

 

    const form = await screen.findByTestId('artists');
    
    return waitFor(() => {
      expect(form).not.toBeEmptyDOMElement();

      
    });
  });
});
