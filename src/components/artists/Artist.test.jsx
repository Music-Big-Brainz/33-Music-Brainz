import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Artist from './Artist';
import { MemoryRouter } from 'react-router-dom';

describe('displays an Artist', () => {
  afterEach(() => cleanup());
  it('renders one single artist', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Artist artistId="" name="" disambiguation="" />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

