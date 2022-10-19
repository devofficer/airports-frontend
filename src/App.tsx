import React from 'react';
import { useQuery } from 'react-query'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
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
  const [originAirport, setOriginAirport] = React.useState<AirportType | null>(null);
  const [destAirport, setDestAirport] = React.useState<AirportType | null>(null);
  const distance = React.useMemo(() => {
    return 0;
  }, [originAirport, destAirport]);

  return (
    <MainLayout>
      <Grid container spacing={4}>
        <Grid item md={8} xs={12}>
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
        <Grid item container md={4} xs={12} spacing={4} sx={{ display: 'block' }}>
          <Grid item xs={12}>
            <AirportSelect
              airports={data}
              label="Choose origin airport"
              value={originAirport}
              onChange={(event: any, value: AirportType | null) => setOriginAirport(value)}
            />
          </Grid>
          <Grid item xs={12}>
            <AirportSelect
              airports={data}
              label="Choose destination airport"
              value={destAirport}
              onChange={(event: any, value: AirportType | null) => setDestAirport(value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="distance-between-airports"
              label="Distance"
              fullWidth
              InputProps={{
                endAdornment: <InputAdornment position="end">mile</InputAdornment>,
                readOnly: true,
              }}
              value={distance}
            />
          </Grid>
        </Grid>
      </Grid>
    </MainLayout>
  );
}

export default App;
