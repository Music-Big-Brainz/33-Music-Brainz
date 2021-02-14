import React from 'react';
import { render } from '@testing-library/react';
import Recording from './Recording';
import { MemoryRouter } from 'react-router-dom';

describe('displays an album', () => {
  it('renders one single album', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Recording
          recordingId="recordingId"
          songTitle="songTitle"
          name="name"
          albumId="albumbId"
        />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
