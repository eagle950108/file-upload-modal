import React from 'react';

import { Stack, Typography } from '@mui/material';

import theme from '../../theme';

const CheckingMessage = ({ title, content }) => {
  return (
    <Stack spacing="14px">
      <Typography color={theme.palette.primary.main} fontWeight="bold">
        {title}
      </Typography>
      <Typography color={theme.palette.ternary.main}>{content}</Typography>
    </Stack>
  );
};

export default CheckingMessage;
