import React from 'react';
import GoogleMap, { GoogleMapWrapper } from './components/GoogleMap';
import { DEFAULT_CENTER, DEFAULT_ZOOM, MAP_BOUNDS } from './config';
import MainLayout from './layout/MainLayout';

function App() {
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
