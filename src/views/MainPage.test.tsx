import { render, screen } from '@testing-library/react';
import React from 'react';
import MainPage from './MainPage';


describe('Main page', () => {
  it('shows the text', async () => {
    render(<MainPage />);

    expect(screen.getByText('Show Dismissable Pane')).toBeVisible();
  });
});
