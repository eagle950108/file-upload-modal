import React, { useState } from 'react';

import { Box, FormGroup, Stack } from '@mui/material';

import ClientSelector from './ClientSelector';
import CustomRadioGroup from './CustomRadioGroup';

const CLIENT_OPTIONS = ['Single', 'Multiple'];
const CLIENT_OPTION_LABELS = ['Testing Center1', 'Testing Center2', 'Testing Center3', 'Testing Center4'];

const Client = () => {
  const [value, setValue] = useState(CLIENT_OPTIONS[1]);
  return (
    <FormGroup>
      <CustomRadioGroup title="Client:" options={CLIENT_OPTIONS} value={value} setValue={setValue} />
      <Box sx={{ marginBottom: '16px' }} />
      <Stack gap={'16px'}>
        {value === CLIENT_OPTIONS[0] ? (
          <ClientSelector label={CLIENT_OPTION_LABELS[0]} />
        ) : (
          CLIENT_OPTION_LABELS.map((option) => <ClientSelector key={option} label={option} />)
        )}
      </Stack>
    </FormGroup>
  );
};

export default Client;
