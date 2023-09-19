
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Box } from "@mui/material";
import { Home } from './home/home';

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ padding: '20px'}}>       
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/job/:id' element={<div>Job</div>}/>
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
