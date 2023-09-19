import { Candidate } from "@monorepo/api"
import { Box, IconButton, Typography } from "@mui/material";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { DateTime } from "luxon";


export type CandidateProps = {
  candidates: Array<Candidate>
}

export const Candidates = (props: CandidateProps) => {
  const { candidates } = props;

  return (
    <Box sx={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
      <Typography variant="h4">Candidates</Typography>
      <TableContainer component={Paper}>
      <Table aria-label="Job Listing table">
        <TableHead>
          <TableRow>       
            <TableCell>Name</TableCell>
            <TableCell>Application Date</TableCell>        
          </TableRow>
        </TableHead>
        <TableBody>
          {candidates.map((c) => (
            <TableRow key={c.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>              
              <TableCell component="th" scope="row">{c.name}</TableCell>
              <TableCell>{DateTime.fromISO(c.applicationDate).toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </Box>
  )
}