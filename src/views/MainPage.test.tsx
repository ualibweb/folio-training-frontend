import { getByText, render, screen } from '@testing-library/react';
import React from 'react';
import MainPage from './MainPage';
import userEvent from '@testing-library/user-event'
import withIntlConfiguration from '../test/util/withIntlConfiguration';

describe('Main page', () => {
  it('shows correct text', async () => {
    render(withIntlConfiguration(<MainPage />));

    expect(screen.getByRole('heading', { name: 'Headline Open side panel' })).toBeVisible();

    await userEvent.click(await screen.findByRole('button'));
    expect(screen.getByText('Side panel')).toBeVisible();
  });
});
