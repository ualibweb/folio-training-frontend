import { render, screen } from '@folio/jest-config-stripes/testing-library/react';
import React from 'react';
import MainPage from './MainPage';

describe('Main page', () => {
  it('shows the text', async () => {
    render(<MainPage />);

    expect(await screen.findByText('Cool stuff is coming')).toBeVisible();
  });
});
