import {
  Stack,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Typography,
  Switch,
  Box,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from '../../theme';

/* Dialog Header Styles */
export const StyledDialogTitle = styled(DialogTitle)({
  padding: '35px',
  paddingBottom: '0px',
});

export const StyledModalHeader = styled(Typography)({
  textAlign: 'center',
  fontSize: '28px',
  fontWeight: 'bold',
});

export const StyledIconButton = styled(IconButton)({
  borderRadius: '7px',
  color: 'white',
  backgroundColor: theme.palette.primary.main,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
});

/* Dialog Content Styles */
export const StyledDialogContent = styled(DialogContent)({
  marginTop: '50px',
  overflowY: 'visible',
  padding: '0px 100px',
  marginTop: '16px',
});

export const StyledFileUploaderContainer = styled(Stack)({
  border: '1px solid darkGray',
  borderRadius: '15px',
  padding: '15px',
});

export const StyledDropzoneContainer = styled(Stack)({
  border: '1px dashed darkGray',
  paddingTop: '36px',
  paddingBottom: '30px',
  borderRadius: '4px',
  alignItems: 'center',
  gap: '16px',
  width: '100%',
});

export const StyledSwitch = styled(Switch)({
  width: 44,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: '2px 3px',
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color: theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
});

/* Dialog Action Styles */
export const StyledDialogAction = styled(Stack)({
  direction: 'column',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  rowGap: '28px',
  padding: '50px',
  paddingBottom: '70px',
  boxSizing: 'border-box',
});

/* Global Styles */
export const StyledDivider = styled(Divider)(({ w, mtop, mbottom, bgcolor }) => ({
  marginTop: mtop || '16px',
  marginBottom: mbottom || '16px',
  width: w || '100%',
  backgroundColor: bgcolor || 'darkgray',
}));

export const StyledButton = styled(Button)(({ paddingx, paddingy }) => ({
  padding: `${paddingy} ${paddingx}`,
  fontSize: '15px',
}));
