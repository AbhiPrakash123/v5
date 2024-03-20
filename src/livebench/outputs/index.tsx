
import LabTable from "./table"
import BasicLineChart from "./lineGraph"
import LabTerminal from "./terminal"
export interface ElementType {
    name: string,
    uname: string,
    type: string,
    element: any
}
const outputs: ElementType[] = [
    {
        name: "table",
        uname: "lab-table-default",
        type: "table",
        element: LabTable
    },
    {
        name: "Line Graph",
        uname: "lab-line-graph-default",
        type: "charts",
        element: BasicLineChart
    },
    {
        name: "Terminal",
        uname: "terminal-default",
        type: "terminal",
        element: LabTerminal
    }
]
export default outputs