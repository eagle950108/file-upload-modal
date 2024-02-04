import React, { useState } from 'react';

import { FormControl, Stack, Typography } from '@mui/material';

import { StyledSwitch } from './style';
import theme from '../../theme';

const CustomSwitch = () => {
  const [checked, setChecked] = useState(true);
  return (
    <FormControl orientation="horizontal" sx={{ minWidth: '150px' }}>
      <Stack direction={'row'} spacing={2}>
        <StyledSwitch checked={checked} onChange={(event) => setChecked(event.target.checked)} />
        <Typography color={theme.palette.primary.main}>{'Toggle ' + (checked ? 'ON' : 'OFF')}</Typography>
      </Stack>
    </FormControl>
  );
};

export default CustomSwitch;
