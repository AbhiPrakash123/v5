import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const marks = [
  {
    value: 0,
    label: '0°C',
  },
  {
    value: 20,
    label: '20°C',
  },
  {
    value: 37,
    label: '37°C',
  },
  {
    value: 100,
    label: '100°C',
  },
];

function valuetext(value: number) {
  return `${value}°C`;
}

export default function LabSlider() {
  return (
    <Box className=" tw-w-full" sx={{paddingLeft:"1rem",paddingRight:"1rem"}}>
      <Box>
        <Slider
          aria-label="Custom marks"
          defaultValue={20}
          getAriaValueText={valuetext}
          step={10}
          valueLabelDisplay="auto"
          marks={marks}
        />
      </Box>

    </Box>
  );
}