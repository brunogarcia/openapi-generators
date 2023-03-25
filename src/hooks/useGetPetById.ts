import { useQuery } from "react-query";
import { useApiContext } from "../context/ApiContext";

const GET_PET_BY_ID = "GET_PET_BY_ID";

export function useGetPetById(petId: number) {
  const { petApi } = useApiContext();

  const { data, error, isLoading } = useQuery({
    queryKey: [GET_PET_BY_ID, { petId }],
    queryFn: () => petApi.getPetById({ petId }),
  });

  return { data, error, isLoading };
}
