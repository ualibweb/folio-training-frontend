import { useOkapiKy } from '@folio/stripes/core';
import { useQuery } from 'react-query';

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

// Define a mock for the useOkapiKy hook
export const kyMock = jest.fn(() => ({
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

export function useInstitutions() {
  const ky = useOkapiKy();

  return useQuery<Institution[]>(
    ['ui-training', 'institutions'],
    async () => ((await ky('location-units/institutions').json<InstitutionsResponse>())).locinsts,
  );
}

export function useInstitutionsMock() {
  const ky = useOkapiKy();

  return useQuery<Institution[]>(
    ['ui-training', 'institutions'],
    async () => ((await ky.get('location-units/institutions').json<InstitutionsResponse>())).locinsts,
  );
}
