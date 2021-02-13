import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import recordingPage from '../fixtures/recordings.json';
import RecordingPage from './RecordingPage';
import { MemoryRouter } from 'react-router-dom';
//global.fetch = require('node-fetch');

const server = setupServer (
  rest.get('http://musicbrainz.org/ws/2/recording?release=032c0dcf-32fb-48df-854c-c4ffdea82009&fmt=json',
    (req, res, ctx) => {
      return res(ctx.json(recordingPage));
    })
);

describe('RecordingPage container', () => {
//   act(async() => {
      
  beforeAll(() => server.listen());
  afterAll(() => server.close());
  //   });
  
  it('displays an Recording page', async() => {
    
    //await act(async() => {
      
    render(
      <MemoryRouter>
        <RecordingPage match={{ params: { recordingId: '032c0dcf-32fb-48df-854c-c4ffdea82009' } }}/>
      </MemoryRouter>
    );

    // });

    // screen.getByTextId('Loading');

    const listOfRecordings = await screen.findByTestId('recordings');
    
    return waitFor(() => {
      expect(listOfRecordings).not.toBeEmptyDOMElement();

      
    });
  });
});
