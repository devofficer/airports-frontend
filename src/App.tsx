import React from 'react';
import GoogleMap, { GoogleMapWrapper } from './components/GoogleMap';
import { DEFAULT_CENTER, DEFAULT_ZOOM, MAP_BOUNDS } from './utils/constants';
import MainLayout from './layout/MainLayout';
import { getAirports } from './services/apiAirports';

function App() {
  
  React.useEffect(() => {
    getAirports();
  }, []);

  return (
    <MainLayout>
      <GoogleMapWrapper>
        <GoogleMap
          zoom={DEFAULT_ZOOM}
          center={DEFAULT_CENTER}
          restriction={{
            latLngBounds: MAP_BOUNDS,
            strictBounds: false
          }}
        />
      </GoogleMapWrapper>
    </MainLayout>
  );
}

export default App;
