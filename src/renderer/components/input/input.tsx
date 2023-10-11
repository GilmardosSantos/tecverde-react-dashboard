/* eslint-disable react/require-default-props */
import React from 'react';
import { TextField, TextFieldVariants, TextFieldProps } from '@mui/material';
import { styled } from '@mui/material/styles';

interface RcInputProps<T, Y> {
  name: string;
  label: string;
  model: string;
  setModel: React.Dispatch<React.SetStateAction<T>>;
  className?: string;
  variant?: TextFieldVariants;
}

const TestInput = styled(TextField)<TextFieldProps>(({ theme }) => ({
  color: theme.palette.success.main,
  '.css-aqpgxn-MuiFormLabel-root-MuiInputLabel-root': {
    color: 'rgb(79,70,229)',
  },
  '.css-1c2i806-MuiFormLabel-root-MuiInputLabel-root': {
    color: 'rgb(79,70,229)',
  },
  '.css-1x51dt5-MuiInputBase-input-MuiInput-input': {
    color: 'rgb(79,70,229)',
  },
  '.css-v4u5dn-MuiInputBase-root-MuiInput-root:before': {
    'border-color': 'rgb(79,70,229)',
  },
  '.css-v4u5dn-MuiInputBase-root-MuiInput-root:after': {
    'border-color': 'rgb(79,70,229)',
  },
}));

function RcInput<T, Y>({
  name,
  label,
  model,
  setModel,
  variant = 'standard',
  className = '',
}: RcInputProps<T, Y>) {
  const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    console.log(value);
    setModel((prevModel) => ({ ...prevModel, [name]: value }));
    // setModel((prevValue) => ({ prevValue, [name]: value }));
  };

  return (
    <TestInput
      name={name}
      className={className}
      variant={variant}
      label={label}
      value={model}
      onChange={changeValue}
    />
  );
}

export default RcInput;
