import React from 'react';
import { render } from '@testing-library/react';
import Lyrics from './Lyrics';

describe('displays an album', () => {
  it('renders one single album', () => {
    const { asFragment } = render(
      <Lyrics 
        song="head" 
        lyrics="Song lyrics"
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
