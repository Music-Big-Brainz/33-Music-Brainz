import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { MemoryRouter } from 'react-router-dom';
import lyricPage from '../fixtures/lyricPage.json';
import LyricsPage from './LyricsPage';

const server = setupServer(
  rest.get('https://api.lyrics.ovh/v1/prince/head',
    (req, res, ctx) => {
      return res(ctx.json(lyricPage));
    })
);

describe('AlbumPage container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('displays an album page', async() => {
    render(
      <MemoryRouter>
        <LyricsPage
          match={{ params: {
            name: 'Prince',
            songTitle: 'Head'
          } }}
        />
      </MemoryRouter>
    );

    const ul = await screen.findByTestId('lyrics');

    return waitFor(() => {
      expect(ul).not.toBeEmptyDOMElement();
    });
  });
});
