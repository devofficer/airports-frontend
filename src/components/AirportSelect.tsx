import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

interface AirportType {
  code: string;
  label: string;
  phone: string;
  suggested?: boolean;
}

interface AirportSelectProps {
  airports: AirportType[];
}

const AirportSelect: React.FC<AirportSelectProps> = ({ airports }) => {
  return (
    <Autocomplete
      sx={{ width: 300 }}
      options={airports}
      autoHighlight
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
        <Box component="li" {...props}>
          {option.label} ({option.code}) +{option.phone}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose a airport"
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
