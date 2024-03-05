
import LabTable from "./table"
import BasicLineChart from "./lineGraph"
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
    }
]
export default outputs