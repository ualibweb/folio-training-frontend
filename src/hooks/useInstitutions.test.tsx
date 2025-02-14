import React, { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { renderHook } from "@testing-library/react-hooks";
import { useInstitutions } from "./useInstitutions";

// Ensure Jest mocks are defined before usage
jest.mock("@folio/stripes/core", () => {
  const kyMock = jest.fn(() => ({
    json: () =>
      Promise.resolve({
        locinsts: [
          { id: "inst1-id", name: "institution 1" },
          { id: "inst2-id", name: "institution 2" },
        ],
        totalRecords: 2,
      }),
  }));

  return {
    ...jest.requireActual("@folio/stripes/core"),
    useOkapiKy: () => ({
      get: kyMock,
    }),
  };
});

describe("Institution query", () => {
  it("Returns the requested data", async () => {
    const queryClient = new QueryClient();
    const wrapper = ({ children }: { children: ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    const { result, waitFor } = renderHook(() => useInstitutions(), { wrapper });

    await waitFor(() => result.current.isSuccess);

    expect(result.current.data).toStrictEqual([
      { id: "inst1-id", name: "institution 1" },
      { id: "inst2-id", name: "institution 2" },
    ]);
  });
});
