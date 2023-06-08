import { useOkapiKy } from "@folio/stripes/core";
import { useQuery } from "react-query";

interface InstitutionsResponse {
    locinsts: Institution[];
    totalRecords: number;
  }
  
  interface Institution {
    id: string;
    name: any;
    code: any;
  
    metadata: {
      createdDate: string;
      updatedDate?: string;
    };
    // what else should go here?  Take a look at the original documentation's at:
    // https://s3.amazonaws.com/foliodocs/api/mod-inventory-storage/r/locationunit.html#location_units_institutions_get
    // The JSON schema in the response provides lots of information about what is provided (and what's `required`!)
    // Do note that `id` is technically optional, however, this is only to accommodate for requests that create a new one.
    // All queries of existing institutions will include IDs, so it does not need to be marked as optional (with ?:).
  }

export const useInstitutions = () => {
  const ky = useOkapiKy();

  return useQuery<Institution[]>(
    ["ui-training", "institutions"],
    async () => ((await ky("location-units/institutions").json<InstitutionsResponse>())).locinsts,
  );
};