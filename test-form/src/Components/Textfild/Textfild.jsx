import { FormLabel, TextField } from '@mui/material'
import React from 'react'

export default function Textfild({textlable,id,styles,color,onInput}) {
  return (
    
<div>
  <FormLabel id="demo-row-radio-buttons-group-label">{textlable}</FormLabel>
<div>  <TextField  color={color} onInput={onInput}  style={styles} id={id}  variant="standard" /></div>
</div>





  )
}
