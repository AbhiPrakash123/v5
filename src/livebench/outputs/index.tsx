
import LabTable from "./table"
import * as LineGraph from "./lineGraph"
import * as LabTerminal from "./terminal"
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
        configuration: LabTerminal.configuration,
        element: LabTerminal.element,
        settings: LabTerminal.Settings
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