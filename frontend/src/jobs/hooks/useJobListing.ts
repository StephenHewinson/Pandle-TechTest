import { GetJobsReply } from "@monorepo/api";
import { useQuery } from "react-query";
import { getApi } from "../../api/api";

const getJobListing = async (): Promise<GetJobsReply> => {
  const { data } = await getApi().get<GetJobsReply>('/jobs');

  return data;
}

const useJobListing = () => {
  const { data, isLoading } = useQuery(['jobListing'], () => getJobListing());

  return { data, isLoading }
}

export { useJobListing };