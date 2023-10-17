/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import {
  Autocomplete,
  AutocompleteInputChangeReason,
  AutocompleteProps,
  TextField,
  TextFieldProps,
  TextFieldVariants,
} from '@mui/material';

import { styled } from '@mui/material/styles';
import React, { useState, useEffect, useMemo } from 'react';
import Options from '../../models/options';

interface RcAutoCompleteProps<T, Y> {
  name: string;
  label: string;
  model: string | string[];
  onChange?: (options: Options<T>) => Promise<void>;
  options?: any[];
  setModel: React.Dispatch<React.SetStateAction<T>>;
  className?: string;
  variant?: TextFieldVariants;
  multiline?: boolean;
}

const StyledInput = styled(TextField)<TextFieldProps>(({ theme }) => ({
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
  '.css-v4u5dn-MuiInputBase-root-MuiInput-root:hover': {
    borderColor: 'red',
  },
  '.css-v4u5dn-MuiInputBase-root-MuiInput-root:before': {
    borderColor: 'rgb(79,70,229)',
  },
  '.css-v4u5dn-MuiInputBase-root-MuiInput-root:after': {
    borderColor: 'rgb(79,70,229)',
  },
}));

function RcAutoComplete<T, Y>({
  name,
  label,
  model,
  setModel,
  onChange,
  className = '',
  options = [],
  variant = 'standard',
  multiline = false,
}: RcAutoCompleteProps<T, Y>) {
  const [autocompleteValue, setAutocompleteValue] = useState('');
  const changeValue = useMemo(
    () => (event: any, newValue: any) => {
      if (newValue) {
        const { value } = newValue;
        setModel((prevModel) => ({ ...prevModel, [name]: 'vasco' }));
        console.log('[newValue]', newValue);
        setAutocompleteValue('vasco');
        if (newValue !== '' && onChange) {
          console.log(newValue);
          onChange(newValue);
        }
      }
    },
    [name, onChange, setModel],
  );

  const inputChange = useMemo(
    () =>
      (
        event: React.SyntheticEvent<any, any>,
        value: string,
        reason: AutocompleteInputChangeReason,
      ) => {
        setAutocompleteValue(value);
        const finalValue = options.find(
          (option) => option.label === value,
        ) as Options<any>;
        console.log(finalValue);
        setModel((prevModel) => ({ ...prevModel, [name]: finalValue.value }));
        if (onChange) onChange(finalValue);
      },
    [name, options, setModel, onChange],
  );

  // useEffect(() => {
  //   if (model && typeof model === 'string') setAutocompleteValue(model);
  // }, [model, changeValue]);

  const isOptionEqual = (option: any, value: any) => {
    console.log(value);
    if (value === '') return true;
    if (option.label) {
      return option.label === value;
    }
    return option === value;
  };

  const StyledAutoComplete = styled(Autocomplete)<any>(({ theme }) => ({
    color: theme.palette.success.main,
    '.MuiInputLabel-root.Mui-focused': {
      color: 'rgb(79,70,229)',
    },
    '.MuiTextField-root': {
      width: '182px',
    },
    '.MuiInput-root:before': {
      'border-color': 'rgb(79,70,229)',
    },
    '.MuiInput-root:after': {
      'border-color': 'rgb(79,70,229)',
    },
    '.MuiAutocomplete-popupIndicator, .MuiAutocomplete-clearIndicator': {
      color: 'rgb(79,70,229)',
    },
    '.MuiAutocomplete-paper-root': {
      color: 'rgb(79,70,229)',
      'background-color': 'rgb(79,70,229)',
    },
  }));

  return (
    <Autocomplete
      options={options}
      noOptionsText={options.length > 0 ? 'Opção não encontrada' : 'Sem opções'}
      // onChange={changeValue}
      onInputChange={inputChange}
      isOptionEqualToValue={isOptionEqual}
      value={autocompleteValue}
      clearIcon=""
      renderInput={(params: any) => (
        <StyledInput
          {...params}
          name={name}
          label={label}
          value={autocompleteValue}
          className={`${className}`}
          variant={variant}
        />
      )}
    />
  );
}

export default RcAutoComplete;
