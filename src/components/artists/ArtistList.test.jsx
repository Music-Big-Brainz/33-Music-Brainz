import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Artist from './Artist';
import { MemoryRouter } from 'react-router-dom';

describe('displays artists', () => {
  afterEach(() => cleanup());
  it('renders artists', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Artist artists="" />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
