
import LabTable from "./table"
import * as LineGraph from "./lineGraph"
// import * as LabTerminal from "./terminal"
import dynamic from 'next/dynamic'
import { Settings } from "./terminal/settings"
import { configuration } from "./terminal/configuration"
const LabTerminal = dynamic(() => import('@/livebench/outputs/terminal'), {
    ssr: false
})

export interface ElementType {
    name: string,
    uname: string,
    type: string,
    element: any
}
const outputs: any = [
    {
        name: "line graph",
        uname: "line-graph",
        type: "charts",
        configuration: LineGraph.configuration,
        element: LineGraph.element,
        settings: LineGraph.Settings
    },
    {
        name: "terminal",
        uname: "terminal",
        type: "terminal",
        configuration: configuration,
        element: LabTerminal,
        settings: Settings
    },
    // {
    //     name: "table",
    //     uname: "lab-table-default",
    //     type: "table",
    //     element: LabTable
    // },
    // {
    //     name: "Line Graph",
    //     uname: "lab-line-graph-default",
    //     type: "charts",
    //     element: BasicLineChart
    // },
    // {
    //     name: "Terminal",
    //     uname: "terminal-default",
    //     type: "terminal",
    //     element: LabTerminal
    // }
]
export default outputs