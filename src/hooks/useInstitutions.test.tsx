import React, { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { renderHook } from '@testing-library/react-hooks';
import useInstitutions from './useInstitutions';

// Define a mock for the useOkapiKy hook
const kyMock = jest.fn(() => ({
  json: () => {
    return Promise.resolve({
      locinsts: [
        {
          id: 'inst1-id',
          name: 'institution 1',
        },
        {
          id: 'inst2-id',
          name: 'institution 2',
        },
      ],
      totalRecords: 2,
    });
  },
}));

jest.mock('@folio/stripes/core', () => ({
  ...jest.requireActual('@folio/stripes/core'),
  useOkapiKy: () => ({
    get: kyMock,
  }),
}));

describe('Institution query', () => {
  it('Returns the requested data', async () => {
    // must be provided to use react-query features. this is normally done by the Stripes interface
    // as a whole, but since we're only rendering the hook, we need to do it ourselves
    const queryClient = new QueryClient();
    // provide the queryClient
    const wrapper = ({ children }: { children: ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    // a special `waitFor` for hooks is returned; we want to be sure to use it here
    const { result, waitFor } = renderHook(() => useInstitutions(), { wrapper });

    // renderHook's result gives us a lot of information; we care about the `current` hook
    // this waits until the API request has been completed
    await waitFor(() => result.current.isSuccess);

    // ensure that the proper endpoint was called
    expect(kyMock).toHaveBeenCalledWith('location-units/institutions');
    // and that it gave us what we wanted
    expect(result.current.data).toStrictEqual([
      {
        id: 'inst1-id',
        name: 'institution 1',
      },
      {
        id: 'inst2-id',
        name: 'institution 2',
      },
    ]);
  });
});


