import React from 'react';
import { useQuery } from 'react-query'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import GoogleMap from './components/GoogleMap';
import { DEFAULT_CENTER, DEFAULT_ZOOM, MAP_BOUNDS } from './utils/constants';
import { getAirports } from './services/apiAirports';
import MainLayout from './layout/MainLayout';
import AirportSelect from './components/AirportSelect';


function App() {
  const { data } = useQuery('airports', () => getAirports({ limit: 999999 }), {
    refetchOnWindowFocus: false,
    initialData: []
  });

  return (
    <MainLayout>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Box sx={{ width: '100%', height: 400 }}>
            <GoogleMap
              zoom={DEFAULT_ZOOM}
              center={DEFAULT_CENTER}
              restriction={{
                latLngBounds: MAP_BOUNDS,
                strictBounds: false
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <AirportSelect airports={data} />
        </Grid>
      </Grid>
    </MainLayout>
  );
}

export default App;
