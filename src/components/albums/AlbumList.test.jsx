import React from 'react';
import { render, cleanup } from '@testing-library/react';
import AlbumList from './AlbumList';

describe('displays a list of albums', () => {
  afterEach(() => cleanup());
  it('renders a list of albums', () => {
    const { asFragment } = render( 
      <AlbumList 
        releases={[]} 
        name="Prince"
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
