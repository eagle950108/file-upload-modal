import React from 'react';

import { ThemeProvider } from '@mui/material/styles';
import { Button, Typography } from '@mui/material';

import './App.css';
import DocumentUploadDialog from './components/DocumentUploadModal/Index';
import theme from './theme';

function App() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <ThemeProvider theme={theme}>
      <Typography sx={{ fontSize: '26px', marginBottom: '46px' }} color="primary">
        File Upload Modal With MUI & React APP
      </Typography>
      <Button variant="outlined" onClick={handleClickOpen}>
        Upload Document
      </Button>
      <DocumentUploadDialog open={open} handleClose={handleClose} />
    </ThemeProvider>
  );
}

export default App;
