import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Settings } from './settings';
interface Config {
  value: string,
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
    <Box className=" tw-w-full tw-h-full tw-flex tw-items-center tw-flex-shrink-0 ">
      <Box>lable</Box>
      <FormControl size="small" className=' tw-flex-grow'>
        <Select
          // labelId="demo-simple-select-label"
          // id="demo-simple-select"
          value={config.value}
          // label="Age"
          onChange={handleChange}
        >
          {config.options.map(item => <MenuItem value={item.value}>{item.name}</MenuItem>)}
        </Select>
      </FormControl>
    </Box>
  );
}
export {BasicSelect as element,configuration,Settings}