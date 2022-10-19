import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete, { AutocompleteProps } from '@mui/material/Autocomplete';

interface AirportSelectProps extends Partial<AutocompleteProps<Airport, false, false, false>> {
  airports: Airport[];
  label?: string;
}

const AirportSelect: React.FC<AirportSelectProps> = ({ airports, label, ...props }) => {
  const [inputValue, setInputValue] = React.useState('');

  return (
    <Autocomplete
      {...props}
      options={airports}
      autoHighlight
      fullWidth
      getOptionLabel={(option) => `${option.airport_name} (${option.iata_code})`}
      renderOption={(props, option) => (
        <Box component="li" {...props}>
          {option.airport_name} ({option.iata_code})
        </Box>
      )}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
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
