import React from 'react';

import { SlClock } from 'react-icons/sl';
import { Box, FormControl, FormGroup, InputLabel, MenuItem, Select, Stack, Typography } from '@mui/material';

import theme from '../../theme';

const CLIENT_OPTIONS = ['Client1', 'Client2', 'Client3'];

const ClientSelector = ({ sx, label }) => {
  return (
    <FormGroup>
      <Box display="grid" gridTemplateColumns="repeat(2,1fr)" alignItems={'center'}>
        <Typography color={theme.palette.primary.main}>{label}</Typography>
        <Stack direction={'row'} spacing={'16px'} alignItems={'center'}>
          <FormControl sx={{ ...sx }} size="small" fullWidth>
            <InputLabel id="select-client-option-label" sx={{ color: theme.palette.primary.light }}>
              Select Client
            </InputLabel>
            <Select labelId="select-client-option" label="Select Client" defaultValue={''}>
              {CLIENT_OPTIONS.map((option) => (
                <MenuItem value={option} key={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <SlClock style={{ color: theme.palette.primary.main, fontSize: '22px', transform: 'rotate(135deg)' }} />
        </Stack>
      </Box>
    </FormGroup>
  );
};

export default ClientSelector;
