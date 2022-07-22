import  React from 'react';
import TextField from '@mui/material/TextField';

export default function FormPropsTextFields({onInput1,onInput2}) {


  return (

<div className='password'>
            <TextField
              id="standard-password"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="standard"
              onInput={onInput1}
            />
            <TextField
            id="standard-password-confirm"
            label="Confirm Password"
            type="password"
            autoComplete="current-password"
            variant="standard"
            onInput={onInput2}
          />
</div>

 
  );
}