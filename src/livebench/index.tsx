import LabButton from "./inputs/button"
import LabSlider from "./inputs/slider"
import LabSwitch from "./inputs/switch"

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
    }
]
export default inputs