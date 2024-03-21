import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { Box } from '@mui/material';
import { configuration } from './configuration';
import { Settings } from './settings'

export default function BasicLineChart(props: any) {
    const config = props?.configuration ? props.configuration : configuration
    return (
        <Box className=" tw-h-full tw-w-full" >
            <LineChart
                xAxis={[{
                    data: [1, 2, 3, 5, 8, 10],
                    label: config.axis_label.x
                }]}
                series={config.lines.map((item: any) => {
                    return {
                        curve: "linear",
                        data: [2, 5.5, 2, 8.5, 1.5, 5],
                        label: item.label
                    }
                })}
                yAxis={[{
                    label: config.axis_label.y
                }]}
            // width={100}
            // height="100%"
            />
        </Box>

    );
}

export { BasicLineChart as element, configuration, Settings }