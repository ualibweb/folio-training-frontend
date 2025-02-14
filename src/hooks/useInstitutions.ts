import { useOkapiKy } from "@folio/stripes/core";
import { useQuery } from "react-query";

const ky = useOkapiKy();

  interface InstitutionsResponse {
    locinsts: Institution[];
    totalRecords: number;
  }
  
  interface Institution {
    id: string;
    name: string;
    code: string;
  
    metadata: {
      createdDate: string;
      updatedDate?: string;
    };
  }

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

export const useInstitutions = () => {
  
  return useQuery<Institution[]>(
    ["ui-training", "institutions"],
    async () => ((await ky("location-units/institutions").json()) as any).locinsts,
    
  );
  
};