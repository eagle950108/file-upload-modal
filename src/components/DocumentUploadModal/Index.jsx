import React, { useState } from 'react';

import {
  Box,
  Dialog,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Portal,
  Select,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import Client from './Client';
import CheckingMessage from './CheckingMessage';
import CustomRadioGroup from './CustomRadioGroup';
import ToleranceWindow from './ToleranceWindow';
import CustomFileUploader from './CustomFileUploader';
import {
  StyledButton,
  StyledDialogAction,
  StyledDialogContent,
  StyledDialogTitle,
  StyledDivider,
  StyledIconButton,
  StyledModalHeader,
} from './style';
import theme from '../../theme';

const IMPORT_NAME = ['Name1', 'Name2', 'Name3'];
const SCHEDULE_OPTION = ['Yes', 'No'];

const DocumentUploadDialog = ({ open, handleClose }) => {
  const [scheduleOption, setScheduleOption] = useState(SCHEDULE_OPTION[0]);
  const onImportButton = () => {
    handleClose();
  };

  const onCancelButton = () => {
    handleClose();
  };

  const isMD = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Portal>
      <Dialog fullWidth={true} maxWidth={'lg'} open={open} PaperProps={{ sx: { borderRadius: '16px' } }}>
        <StyledDialogTitle>
          <Stack direction="row">
            <StyledIconButton onClick={handleClose} aria-label="close">
              <CloseIcon />
            </StyledIconButton>
          </Stack>
          <Stack alignItems="center">
            <StyledModalHeader variant="caption" color="primary">
              Document Upload
              <StyledDivider />
            </StyledModalHeader>
          </Stack>
        </StyledDialogTitle>
        <StyledDialogContent>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container columnSpacing={'48px'}>
              <Grid item xs={12} md={6}>
                <Stack>
                  <FormControl sx={{ minWidth: 120 }} size="small">
                    <InputLabel id="name-selector-label" sx={{ color: theme.palette.primary.main, fontWeight: 'bold' }}>
                      Select Import Name:
                    </InputLabel>
                    <Select labelId="name-selector-label" label="Select Import Name:" defaultValue={''}>
                      {IMPORT_NAME.map((name) => (
                        <MenuItem value={name} key={name}>
                          {name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <StyledDivider w="70%" />
                  <CustomFileUploader />
                  <StyledDivider w="70%" />
                  <CheckingMessage title="Elapse Data Checking:" content="No Elapsed Dates!" />
                  <StyledDivider w="70%" />
                  <ToleranceWindow />
                  {isMD ? <StyledDivider w="70%" /> : ''}
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack>
                  <CustomRadioGroup
                    title="Split schedule using socila distancing?"
                    options={SCHEDULE_OPTION}
                    value={scheduleOption}
                    setValue={setScheduleOption}
                  />
                  <StyledDivider w="80%" />
                  <CheckingMessage title="Location Checking:" content="All Available!" />
                  <StyledDivider w="80%" />
                  <Client />
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </StyledDialogContent>
        <StyledDialogAction>
          <Stack>
            <Typography sx={{ fontSize: '18px', fontWeight: 'bold' }} color="primary">
              Data in the import file is correct. Please press Continue to import.
            </Typography>
          </Stack>
          <Stack direction="row" spacing={'25px'}>
            <StyledButton variant="contained" onClick={onImportButton} paddingx="66px" paddingy="10px">
              Continue Import
            </StyledButton>
            <StyledButton variant="outlined" onClick={onCancelButton} paddingx="66px" paddingy="10px" color="secondary">
              Cancel
            </StyledButton>
          </Stack>
        </StyledDialogAction>
      </Dialog>
    </Portal>
  );
};

export default DocumentUploadDialog;
