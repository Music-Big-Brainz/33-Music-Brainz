import React from 'react';
import { render, cleanup } from '@testing-library/react';
import AlbumList from './AlbumList';
import MemoryRouter from 'react-router-dom';

describe('displays a list of albums', () => {
  afterEach(() => cleanup());
  it('renders a list of albums', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <AlbumList title="" date="" />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
