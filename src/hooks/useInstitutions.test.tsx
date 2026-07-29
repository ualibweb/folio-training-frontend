import { renderHook } from "@testing-library/react-hooks";
import { waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactNode } from "react";
import { useInstitutions } from "./useInstitutions";
import React from "react";

const kyMock = jest.fn(() => ({
  json: () => {
    return Promise.resolve({
      locinsts: [
        { id: "inst1-id", name: "institution 1" },
        { id: "inst2-id", name: "institution 2" },
      ],
      totalRecords: 2,
    });
  },
}));

jest.mock("@folio/stripes/core", () => ({
  ...jest.requireActual("@folio/stripes/core"),
  useOkapiKy: () => kyMock,
}));

describe("Institution query", () => {
  it("Returns the requested data", async () => {
    const queryClient = new QueryClient();
    const wrapper = ({ children }: { children: ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    const { result } = renderHook(() => useInstitutions(), { wrapper });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(kyMock).toHaveBeenCalledWith("location-units/institutions");
    expect(result.current.data).toStrictEqual([
      { id: "inst1-id", name: "institution 1" },
      { id: "inst2-id", name: "institution 2" },
    ]);
  });
});