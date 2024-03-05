import LabButton from "./button"
import LabSlider from "./slider"
import LabSwitch from "./switch"
import BasicSelect from "./select"
import LabTitle from "./title"
export interface ElementType {
    name: string,
    uname: string,
    type: string,
    element: any
}
const inputs: ElementType[] = [
    {
        name: "button",
        uname: "lab-button-default",
        type: "button",
        element: LabButton
    },
    {
        name: "switch",
        uname: "lab-switch-default",
        type:"switch",
        element: LabSwitch
    },
    {
        name: "slider",
        uname: "lab-slider-default",
        type:"slider",
        element: LabSlider
    },
    {
        name: "select",
        uname: "lab-select-default",
        type:"select",
        element: BasicSelect
    },
    {
        name: "title",
        uname: "lab-title-default",
        type:"title",
        element: LabTitle
    }
]
export default inputs