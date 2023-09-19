import { Box, Typography } from "@mui/material"
import { Listing } from "../jobs/listing/listing"

export const Home = () => {
  return (<Box sx={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
    <Typography variant="h3">Job Listings</Typography>
    <Box sx={{maxWidth: '1000px'}}>
      <Listing />
    </Box>
  </Box>);
}