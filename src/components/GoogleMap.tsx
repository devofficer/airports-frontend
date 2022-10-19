import React from 'react';
// @ts-ignore
import { Wrapper } from "@googlemaps/react-wrapper";
import Box from '@mui/material/Box';

interface GoogleMapProps extends google.maps.MapOptions {
  children?: React.ReactNode;
  height?: string | number;
}

export const GoogleMapWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Wrapper
      apiKey={process.env.REACT_APP_MAP_KEY as string}
    >
      {children}
    </Wrapper>
  );
};

const GoogleMap: React.FC<GoogleMapProps> = ({ children, ...props }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [map, setMap] = React.useState<google.maps.Map>();

  React.useEffect(() => {
    if (ref.current && !map) {
      setMap(new google.maps.Map(ref.current, {
        ...props
      }));
    }
    // eslint-disable-next-line
  }, [ref, map]);

  return (
    <Box ref={ref} sx={{ width: '100%', height: '100%' }} />
  );
};

export default GoogleMap;
