import React from 'react';
// @ts-ignore
import { Wrapper } from "@googlemaps/react-wrapper";
import Box from '@mui/material/Box';

interface GoogleMapProps extends google.maps.MapOptions {
  children?: React.ReactNode;
  originAirport: Airport | null;
  destAirport: Airport | null;
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

const GoogleMap: React.FC<GoogleMapProps> = ({ children, originAirport, destAirport, ...props }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [map, setMap] = React.useState<google.maps.Map>();
  const [originMarker, setOriginMarker] = React.useState<google.maps.Marker>();
  const [destMarker, setDestMarker] = React.useState<google.maps.Marker>();
  const [airlineRoute, setAirlineRoute] = React.useState<google.maps.Polyline>();

  React.useEffect(() => {
    if (ref.current && !map) {
      const newMap = new google.maps.Map(ref.current, {
        ...props
      });
      setMap(newMap);
      setOriginMarker(new google.maps.Marker({ map: newMap, visible: false }));
      setDestMarker(new google.maps.Marker({ map: newMap, visible: false }));
      setAirlineRoute(new google.maps.Polyline({ map: newMap, visible: false, strokeColor: '#ff0000' }));
    }
  }, [ref, map, props]);

  React.useEffect(() => {
    if (!map || !originMarker || !destMarker || !airlineRoute) {
      return;
    }

    if (originAirport) {
      originMarker.setPosition({
        lat: Number(originAirport.latitude),
        lng: Number(originAirport.longitude)
      });
      originMarker.setVisible(true);
    } else {
      originMarker.setVisible(false);
    }

    if (destAirport) {
      destMarker.setPosition({
        lat: Number(destAirport.latitude),
        lng: Number(destAirport.longitude)
      });
      destMarker.setVisible(true);
    } else {
      destMarker.setVisible(false);
    }

    if (originAirport && destAirport) {
      const pt1 = originMarker.getPosition() as google.maps.LatLng;
      const pt2 = destMarker.getPosition() as google.maps.LatLng;

      airlineRoute.setPath([pt1, pt2]);
      airlineRoute.setVisible(true);

      // map.fitBounds(new google.maps.LatLngBounds(pt1, pt2));
    } else {
      airlineRoute.setVisible(false);
    }
    // eslint-disable-next-line
  }, [originAirport, destAirport, map]);

  return (
    <Box ref={ref} sx={{ width: '100%', height: '100%' }} />
  );
};

export default GoogleMap;
