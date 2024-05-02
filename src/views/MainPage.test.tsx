import { render, screen } from '@folio/jest-config-stripes/testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import React from 'react';
import MainPage from './MainPage';
import userEvent from '@testing-library/user-event'
import withIntlConfiguration from '../test/util/withIntlConfiguration';
import { useInstitutions } from '../hooks/useInstitutions';

const queryClient = new QueryClient();

jest.mock('react-query', () => ({
  ...jest.requireActual('react-query'),
  useQueryClient: () => queryClient,
}));

jest.mock('../hooks/useInstitutions');

describe('Main page', () => {
  it('shows correct text', async () => {
    render(withIntlConfiguration(<QueryClientProvider client={queryClient}> <MainPage/> </QueryClientProvider>));

    expect(screen.getByRole('heading', { name: 'Headline Open side panel' })).toBeVisible();

    await userEvent.click(await screen.findByText('Open side panel'));
    expect(screen.getByText('Side panel')).toBeVisible();
  });

  it('intializes MCL properly', () => {
    (useInstitutions as any).mockReturnValue({ isSuccess: false });

    render(withIntlConfiguration(<MainPage/>));

    expect(screen.queryByText('institution 1')).toBeNull();
    expect(screen.queryByText('institution 2')).toBeNull();
  });

  it('intializes MCL properly', () => {
    (useInstitutions as any).mockReturnValue({ 
      isSuccess: true,
      data: [
          {
            id: "inst1-id",
            name: "institution 1",
          },
          {
            id: "inst2-id",
            name: "institution 2",
          },
        ],
      },
    );

    render(withIntlConfiguration(<MainPage/>));

    expect(screen.queryByText('institution 1')).toBeInTheDocument();
    expect(screen.queryByText('institution 2')).toBeInTheDocument();
  });
});
