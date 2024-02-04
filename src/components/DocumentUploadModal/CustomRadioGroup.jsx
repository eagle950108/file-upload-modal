import React from 'react';

import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';

import theme from '../../theme';

const CustomRadioGroup = ({ title, options = [], sx, value, setValue }) => {
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <FormControl>
      <FormLabel id="custom-radio-buttons-group" sx={{ fontWeight: 'bold', color: theme.palette.primary.main, ...sx }}>
        {title}
      </FormLabel>
      <RadioGroup
        row
        aria-labelledby="custom-radio-buttons-group"
        name="custom-radio-group"
        value={value}
        onChange={handleChange}
      >
        {options.length > 0 &&
          options.map((option) => (
            <FormControlLabel
              value={option}
              control={<Radio />}
              label={option}
              color={theme.palette.primary.main}
              key={option}
            />
          ))}
      </RadioGroup>
    </FormControl>
  );
};

export default CustomRadioGroup;
