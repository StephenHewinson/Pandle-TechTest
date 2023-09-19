
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Box } from "@mui/material";
import { Home } from './home/home';
import { JobWithCandidates } from './jobs/jobWithCandidates/jobWithCandidates';

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ padding: '20px'}}>       
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/job/:id' element={<JobWithCandidates />}/>
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
