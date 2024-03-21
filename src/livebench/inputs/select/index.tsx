import * as React from 'react';
import {Box,Typography} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Settings } from './settings';
interface Config {
  value: string,
  lable: string,
  options:Array<any>,
  event: string,
  variant: "contained" | "text" | "outlined",
  type: "submit" | "trigger",
}
interface SelectProps {
  configuration?: Config
}

const configuration = {
  value: "",
  lable: "title",
  options: [],
  event: "",
  variant: "contained",
  type: "submit",
}

export default function BasicSelect(props:SelectProps) {
  const config = props?.configuration ? props.configuration : configuration
  const [age, setAge] = React.useState('10');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box className=" tw-w-full tw-h-full tw-flex tw-flex-col tw-items-center">
      {config.lable?<Typography className=' tw-w-full'>{config.lable}</Typography>:""}
      <FormControl className=' tw-w-full' size="small">
        <Select
          // labelId="demo-simple-select-label"
          // id="demo-simple-select"
          value={config.value}
          // label="Age"
          onChange={handleChange}
        >
          {config.options.map((item,index) => <MenuItem key={index} value={item.value}>{item.name}</MenuItem>)}
        </Select>
      </FormControl>
    </Box>
  );
}
export {BasicSelect as element,configuration,Settings}