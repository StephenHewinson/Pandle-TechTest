import { JobWithCandidates } from "@monorepo/api";
import { useQuery } from "react-query";
import { getApi } from "../../api/api";

const getJob = async (id: number): Promise<JobWithCandidates | null> => {
  const { data } = await getApi().get<JobWithCandidates | null>(`/job/${id}`);

  return data;
}

const useJobWithCandidates = (id: number) => {
  const { data, isLoading } = useQuery(['job', id], () => getJob(id));

  return { data, isLoading }
}

export { useJobWithCandidates };