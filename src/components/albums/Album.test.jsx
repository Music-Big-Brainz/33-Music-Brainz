import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Album from './Album';
import { MemoryRouter } from 'react-router-dom';

describe('displays an album', () => {
  afterEach(() => cleanup());
  it('renders one single album', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Album name="" albumId="" title="" date="" />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
