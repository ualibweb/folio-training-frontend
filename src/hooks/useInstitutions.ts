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

  

export const useInstitutions = () => {
  
  return useQuery<Institution[]>(
    ["ui-training", "institutions"],
    async () => ((await ky("location-units/institutions").json()) as any).locinsts,
    
  );
  
};