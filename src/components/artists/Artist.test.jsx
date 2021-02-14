import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Artist from './Artist';
import { MemoryRouter } from 'react-router-dom';

describe('displays an Artist', () => {
  afterEach(() => cleanup());
  it('renders one single artist', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Artist 
          artistId="070d193a-845c-479f-980e-bef15710653e"
          name="Prince"
          disambiguation="the artist formely known as"
        />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

