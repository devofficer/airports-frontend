import React from 'react';
import Box from '@mui/material/Box';
import AppBar from './AppBar';
import Main from './Main';
import Drawer, { DrawerHeader } from './Drawer';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { LoadingContext } from '../contexts/loadingContext';
import { Typography } from '@mui/material';

const MainLayout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const [open, setOpen] = React.useState(false);
  const [isLoading, setLoading] = React.useState(true);
  const [loadingMessage, setLoadingMessage] = React.useState('');

  const handleDrawerOpen = () => {
    // setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <LoadingContext.Provider value={{ isLoading, setLoading, loadingMessage, setLoadingMessage }}>
      <Box sx={{ display: 'flex' }}>
        <AppBar
          open={open}
          onDrawerOpen={handleDrawerOpen}
        />
        <Drawer open={open} onDrawerClose={handleDrawerClose} />
        <Main open={open}>
          <DrawerHeader />
          {children}
        </Main>
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={isLoading}
        >
          <CircularProgress color="inherit" />
          <Typography sx={{ ml: 1 }}>
            {loadingMessage}
          </Typography>
        </Backdrop>
      </Box>
    </LoadingContext.Provider>
  );
};

export default MainLayout;

