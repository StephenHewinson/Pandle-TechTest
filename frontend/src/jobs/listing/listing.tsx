import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { useJobListing } from "../hooks/useJobListing"
import { IconButton, Skeleton } from '@mui/material';
import ModeEditIcon from '@mui/icons-material/ModeEdit';


export const Listing = () => {
  const { data, isLoading } = useJobListing();

  if (isLoading) return <Skeleton />;

  const onEditClick = (id: number) => {
    console.log(id);
  }

  return (<TableContainer component={Paper}>
    <Table aria-label="Job Listing table">
      <TableHead>
        <TableRow>
          <TableCell></TableCell>
          <TableCell>Job Title</TableCell>
          <TableCell>Company</TableCell>
          <TableCell>Location</TableCell>
          <TableCell>Description</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data?.results.map((job) => (
          <TableRow key={job.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell>
              <IconButton href={`/job/${job.id}`}>
                <ModeEditIcon />
              </IconButton>
            </TableCell>
            <TableCell component="th" scope="row">{job.title}</TableCell>
            <TableCell>{job.company}</TableCell>
            <TableCell>{job.location}</TableCell>
            <TableCell>{job.description}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>)
}