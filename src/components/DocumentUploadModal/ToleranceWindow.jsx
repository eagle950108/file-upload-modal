import React from 'react';

import { Divider, Grid, Stack, Typography } from '@mui/material';
import { SlClock } from 'react-icons/sl';

import theme from '../../theme';
import CustomSwitch from './CustomSwitch';

const ToleranceWindow = () => {
  return (
    <Grid container rowGap={'14px'}>
      <Grid item xs={12}>
        <Typography color={theme.palette.primary.main} fontWeight="bold">
          Tolerance Window:
        </Typography>
      </Grid>
      <Stack
        direction={'row'}
        spacing={2}
        divider={<Divider orientation="vertical" sx={{ backgroundColor: theme.palette.primary.light }} />}
      >
        <CustomSwitch />
        <Typography color={theme.palette.primary.main} sx={{ display: 'flex', gap: '8px' }}>
          <SlClock style={{ color: theme.palette.primary.main, fontSize: '22px', transform: 'rotate(135deg)' }} />
          Select Tolerance Level
        </Typography>
      </Stack>
    </Grid>
  );
};

export default ToleranceWindow;
