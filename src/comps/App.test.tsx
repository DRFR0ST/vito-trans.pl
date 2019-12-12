import { Header } from './common';
import React from 'react';
import { render } from '@testing-library/react';

test("renders the thumbnail", () => {
  const { getByAltText } = render(<Header />)
  const incrediblesPosterImg = getByAltText(/Header thumbnail/i)

  expect(incrediblesPosterImg).toBeInTheDocument();
});