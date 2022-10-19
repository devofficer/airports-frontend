import React from 'react';
import Box from '@mui/material/Box';
import AppBar from './AppBar';
import Main from './Main';
import Drawer, { DrawerHeader } from './Drawer';

const MainLayout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    // setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
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
    </Box>
  );
};

export default MainLayout;

