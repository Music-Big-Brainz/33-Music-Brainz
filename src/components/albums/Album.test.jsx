import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Album from './Album';
import { MemoryRouter } from 'react-router-dom';

describe('displays an album', () => {
  afterEach(() => cleanup());
  it('renders one single album', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Album 
          name="Prince" 
          albumId="281e42d6-389e-4224-9bc6-84220a62d50f" 
          title="Dirty Mind" 
          date="1980" 
        />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
