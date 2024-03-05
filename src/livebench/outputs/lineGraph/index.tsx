import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { Box } from '@mui/material';

export default function BasicLineChart() {
    return (
        <Box className=" tw-h-full tw-w-full" >
            <LineChart
                xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                series={[
                    {
                        curve: "linear",
                        data: [2, 5.5, 2, 8.5, 1.5, 5],
                    },
                ]}
            // width={100}
            // height="100%"
            />
        </Box>

    );
}