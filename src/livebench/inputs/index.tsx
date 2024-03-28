import * as Button from "./button"
import LabSlider from "./slider"
import LabSwitch from "./switch"
import * as Select from "./select"
import LabTitle from "./title"
import * as Form from "./formContainer"
export interface ElementType {
    name: string,
    uname: string,
    type: string,
    element: any,
    configuration: any,
    settings: any
}
const inputs: ElementType[] = [
    {
        name: "button",
        uname: "lab-button-default",
        type: "button",
        configuration: Button.configuration,
        element: Button.element,
        settings: Button.Settings
    },
    {
        name: "form",
        uname: "lab-form-default",
        type: "form",
        configuration: Form.configuration,
        element: Form.element,
        settings: Form.Settings
    },
    // {
    //     name: "switch",
    //     uname: "lab-switch-default",
    //     type:"switch",
    //     element: LabSwitch,
    //     configuration:[]
    // },
    // {
    //     name: "slider",
    //     uname: "lab-slider-default",
    //     type:"slider",
    //     element: LabSlider,
    //     configuration:[]
    // },
    {
        name: "select",
        uname: "lab-select-default",
        type:"select",
        element: Select.element,
        configuration: Select.configuration,
        settings: Select.Settings
    },
    // {
    //     name: "title",
    //     uname: "lab-title-default",
    //     type:"title",
    //     element: LabTitle,
    //     configuration: []
    // }
]
export default inputs