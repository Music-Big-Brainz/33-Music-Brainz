import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import recordingPage from '../fixtures/recordings.json';
import RecordingPage from './RecordingPage';
import { MemoryRouter } from 'react-router-dom';

const server = setupServer (
  rest.get('http://musicbrainz.org/ws/2/recording?release=281e42d6-389e-4224-9bc6-84220a62d50f&fmt=json',
    (req, res, ctx) => {
      return res(ctx.json(recordingPage));
    })
);

describe('RecordingPage container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());
  
  it('displays an Recording page', async() => {
    render(
      <MemoryRouter>
        <RecordingPage match={{ params: { 
          recordingId: 'de74e803-d7ff-4475-9f36-a75dab55709b',
          name: 'Prince',
          albumId: '281e42d6-389e-4224-9bc6-84220a62d50f'
        } }}/>
      </MemoryRouter>
    );

    const ul = await screen.findByTestId('recordings');
    
    return waitFor(() => {
      expect(ul).not.toBeEmptyDOMElement();
    });
  });
});
