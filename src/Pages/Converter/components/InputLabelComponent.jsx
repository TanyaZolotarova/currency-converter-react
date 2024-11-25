import { InputLabel } from '@mui/material';

// eslint-disable-next-line react/prop-types
export function InputLabelComponent({ text, htmlFor }) {
  return (
    <InputLabel
      htmlFor={htmlFor}
      className={'text-left font-roboto !font-medium !text-xl'}
      sx={{ color: '#707C87' }}
    >
      {text}
    </InputLabel>
  );
}
