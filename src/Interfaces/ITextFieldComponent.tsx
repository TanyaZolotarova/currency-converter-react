import React from 'react';
import { FieldError, Merge } from 'react-hook-form';

export interface ITextFieldComponent {
  id: string;
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  helperText?: string | FieldError | Merge<FieldError, FieldError>;
  props?: string;
}
