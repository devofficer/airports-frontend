import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

interface AirportSelectProps {
  airports: AirportType[];
  label?: string;
}

const AirportSelect: React.FC<AirportSelectProps> = ({ airports, label }) => {
  return (
    <Autocomplete
      options={airports}
      autoHighlight
      fullWidth
      getOptionLabel={(option) => `${option.airport_name} (${option.iata_code})`}
      renderOption={(props, option) => (
        <Box component="li" {...props}>
          {option.airport_name} ({option.iata_code})
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password'
          }}
        />
      )}
    />
  );
}
export default AirportSelect;
