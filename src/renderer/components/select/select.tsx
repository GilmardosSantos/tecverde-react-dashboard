/* eslint-disable react/require-default-props */
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectProps,
  InputLabelProps,
  FormControlProps,
} from '@mui/material';
import React, { useState } from 'react';
import { styled } from '@mui/material/styles';

interface Option {
  label: string;
  value: string;
  object?: any;
  filter?: string;
}
interface RcInputProps<T, Y> {
  name: string;
  label: string;
  model: string | string[];
  options: Option[];
  setModel: React.Dispatch<React.SetStateAction<T>>;
  className?: string;
  multiple?: boolean;
}

const StyledInputLabel = styled(InputLabel)<InputLabelProps>(({ theme }) => ({
  '.MuiInputLabel-root': {
    color: 'red',
  },
}));

const StyledFormControl = styled(FormControl)<FormControlProps>(
  ({ theme }) => ({
    '.MuiInputLabel-root': {
      color: 'rgb(79,70,229)',
    },
    '.MuiInputLabel-root.Mui-focused': {
      color: 'rgb(79,70,229)',
    },
    '.MuiOutlinedInput-input': {
      color: 'rgb(79,70,229)',
    },
    '.MuiOutlinedInput-notchedOutline': {
      borderColor: 'rgb(79,70,229)',
    },
  }),
);

function RcSelect<T, Y>({
  name,
  label,
  model,
  options,
  setModel,
  className = '',
  multiple = false,
}: RcInputProps<T, Y>) {
  const changeValue = (event: any) => {
    const { value } = event.target;
    console.log(value);
    setModel((prevModel) => ({ ...prevModel, [name]: value }));
  };
  return (
    <Box sx={{ mt: 2 }}>
      <StyledFormControl className="w-[185px]">
        <StyledInputLabel>{label}</StyledInputLabel>
        <Select label={label} value={model} onChange={changeValue}>
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </StyledFormControl>
    </Box>
  );
}

export default RcSelect;
