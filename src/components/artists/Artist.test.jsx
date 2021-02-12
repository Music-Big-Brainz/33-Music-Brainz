import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Artist from './Artist';

describe('displays an Artist', () => {
  afterEach(() => cleanup());
  it('renders one single artist', () => {
    const { asFragment } = render(<Artist artistId="" name="" disambiguation />);
    expect(asFragment()).toMatchSnapshot();
  });
});
