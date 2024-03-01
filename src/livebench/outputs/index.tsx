
import LabTable from "./table"
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
    }
]
export default outputs