import { render, screen } from '@folio/jest-config-stripes/testing-library/react';
import React from 'react';
import MainPage from './MainPage';
import {Button} from '@folio/stripes/components';
import '@testing-library/jest-dom'
import withIntlConfiguration from '../test/util/withIntlConfiguration';
describe('Main page', () => {
  it('shows the text', async () => {
    render(withIntlConfiguration (<MainPage />));

    expect(await screen.findByText('Hyalo')).toBeVisible();
  });
});
