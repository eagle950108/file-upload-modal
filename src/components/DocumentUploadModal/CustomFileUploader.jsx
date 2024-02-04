import React from 'react';

import { Button, LinearProgress, Stack, TextField, Typography } from '@mui/material';
import { useDropzone } from 'react-dropzone';
import { BsFileEarmarkImage } from 'react-icons/bs';
import { PiFileTextFill } from 'react-icons/pi';

import theme from '../../theme';
import { StyledDivider, StyledDropzoneContainer, StyledFileUploaderContainer } from './style';

export default function CustomFileUploader() {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const formatFileSize = (bytes) => {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) return '0 Bytes';
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return `${(bytes / Math.pow(1024, i)).toFixed(1)} ${sizes[i]}`;
  };

  return (
    <Stack spacing={'14px'}>
      <Typography color="primary" fontWeight="bold">
        Select a manifest that you'd like to import
      </Typography>
      <StyledFileUploaderContainer spacing={'16px'} alignItems={'center'}>
        <StyledDropzoneContainer {...getRootProps({ className: 'dropzone' })}>
          <TextField {...getInputProps()} />
          <PiFileTextFill style={{ color: theme.palette.secondary.main, fontSize: '28px' }} />
          <Typography color="primary">
            Drag & Drop Here Or <strong>Browse</strong>
          </Typography>
        </StyledDropzoneContainer>
        <Button variant="contained" sx={{ padding: '8px 44px' }}>
          Upload Manifest
        </Button>
      </StyledFileUploaderContainer>
      <Stack>
        {acceptedFiles.length > 0 && (
          <>
            <StyledDivider mtop="8px" mbottom="14px" bgcolor="lightgray" />
            <Stack rowGap={'14px'}>
              {acceptedFiles.map((acceptedFile, index) => {
                return (
                  <Stack direction={'row'} gap={'18px'} alignItems={'center'} key={acceptedFile + index}>
                    <BsFileEarmarkImage style={{ color: theme.palette.secondary.main, fontSize: '24px' }} />
                    <Stack width={'100%'}>
                      <Stack justifyContent={'space-between'} direction={'row'} alignItems={'center'}>
                        <Typography component={'span'} color={'darkgray'}>
                          {acceptedFile.name}
                        </Typography>
                        <Typography component={'span'} fontSize={'12px'} fontWeight={'bold'}>
                          {formatFileSize(acceptedFile.size)}
                        </Typography>
                      </Stack>
                      <LinearProgress
                        value={1}
                        color="secondary"
                        variant="determinate"
                        sx={{ borderRadius: '3px', backgroundColor: 'lightgray' }}
                      ></LinearProgress>
                    </Stack>
                  </Stack>
                );
              })}
            </Stack>
            <StyledDivider mtop="18px" mbottom="10px" bgcolor="lightgray" />
          </>
        )}
      </Stack>
    </Stack>
  );
}
