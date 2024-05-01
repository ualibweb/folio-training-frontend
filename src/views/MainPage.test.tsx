import { render, screen } from '@folio/jest-config-stripes/testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import React from 'react';
import MainPage from './MainPage';
import userEvent from '@testing-library/user-event'
import withIntlConfiguration from '../test/util/withIntlConfiguration';

const queryClient = new QueryClient();

// Mock the QueryClientProvider to provide the QueryClient
jest.mock('react-query', () => ({
  ...jest.requireActual('react-query'),
  useQueryClient: () => queryClient,
}));

describe('Main page', () => {
  it('shows correct text', async () => {
    render(withIntlConfiguration(<QueryClientProvider client={queryClient}> <MainPage /></QueryClientProvider>));

    expect(screen.getByRole('heading', { name: 'Headline Open side panel' })).toBeVisible();

    await userEvent.click(await screen.findByText('Open side panel'));
    expect(screen.getByText('Side panel')).toBeVisible();
  });
});
