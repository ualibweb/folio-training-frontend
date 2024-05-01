import { useOkapiKy } from "@folio/stripes/core";
import { useQuery } from "react-query";

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

export const useInstitutions = () => {
  const ky = useOkapiKy();

  return useQuery<Institution[]>(
    ["ui-training", "institutions"],
    async () => ((await ky.get("location-units/institutions").json<InstitutionsResponse>())).locinsts,
  );
};