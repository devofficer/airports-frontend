import React from 'react';
import { useQuery } from 'react-query';
import { LoadingContext } from '../contexts/loadingContext';
import { getAirports } from '../services/apiAirports';

const useAirports = () => {
  const { setLoading, setLoadingMessage } = React.useContext(LoadingContext);
  const { data } = useQuery('airports', () => {
    setLoading(true);
    setLoadingMessage('Fetching airports data...');
    return getAirports({ limit: 999999 });
  }, {
    refetchOnWindowFocus: false,
    initialData: [],
    onSuccess: () => setLoading(false)
  });

  return data;
}
export default useAirports;