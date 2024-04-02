import { Button} from "@mui/material"
import { Settings } from "./settings"
interface Config {
    value: string,
    event: string,
    variant: "contained" | "text" | "outlined",
    type: "submit" | "trigger",
}
interface ButtonProps {
    configuration?: Config
}

const configuration = {
    value: "button",
    event: "",
    variant: "contained",
    type: "submit",
}

export default function LabButton(props: ButtonProps) {
    console.log(props)
    const config = props?.configuration ? props.configuration : configuration

    return (
        <>
            {
                // @ts-ignore
                <Button className=" tw-w-full" variant={`${config.variant}`}>{config.value}</Button>
            }
        </>
    )
}


export { LabButton as element, configuration, Settings }