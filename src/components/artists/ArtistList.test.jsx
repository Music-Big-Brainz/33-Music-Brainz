import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Artist from './Artist';
import { MemoryRouter } from 'react-router-dom';

describe('displays artists', () => {
  afterEach(() => cleanup());
  it('renders artists', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Artist 
          name="Prince"
          disambiguation="the artist formely known as"
          artistId="070d193a-845c-479f-980e-bef15710653e"
        />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
