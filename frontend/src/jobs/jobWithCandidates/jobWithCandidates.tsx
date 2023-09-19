import { useParams } from "react-router-dom"
import { useJobWithCandidates } from "../hooks/useJobWithCandidates";
import { Box, Skeleton, Typography } from "@mui/material";
import { Candidates } from "../candidates/candidates";

export const JobWithCandidates = () => {
  const { id } = useParams<{ id: string}>();
  const parsedId = Number.parseInt(id ?? '');

  const { data, isLoading } = useJobWithCandidates(parsedId);

  if (Number.isNaN(parsedId)) return <div>Error component</div>;
  if (isLoading || !data) return <Skeleton />;

  return (<Box sx={{display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '1000px'}}>
    <Typography>Job</Typography>
    <div>
        Job details here
    </div>
    <Candidates candidates={data.candidates} />
  </Box>)

}