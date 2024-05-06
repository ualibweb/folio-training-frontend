import React, { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useInstitutions } from './useInstitutions';
import { renderHook } from '@folio/jest-config-stripes/testing-library/react-hooks';

const kyMock = jest.fn(() => ({
  json: () => {
    return Promise.resolve({
      locinsts: [
        {
          id: "inst1-id",
          name: "institution 1",
        },
        {
          id: "inst2-id",
          name: "institution 2",
        },
      ],
      totalRecords: 2,
    });
  },
}));
jest.mock("@folio/stripes/core", () => ({
  ...jest.requireActual("@folio/stripes/core"),
  useOkapiKy: () => ({
    get: kyMock,
  }),
}));

describe("Institution query", () => {
  it("Returns the requested data", async () => {
    const queryClient = new QueryClient();
    const wrapper = ({ children }: { children: ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    const { result, waitFor } = renderHook(() => useInstitutions(), { wrapper });

    await waitFor(() => result.current.isSuccess);

    expect(kyMock).toHaveBeenCalledWith("location-units/institutions");
    expect(result.current.data).toStrictEqual([
      {
        id: "inst1-id",
        name: "institution 1",
      },
      {
        id: "inst2-id",
        name: "institution 2",
      },
    ]);
  });
});