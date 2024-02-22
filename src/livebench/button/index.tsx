import { Button } from "@mui/material"

interface props {
    name?: string
};

const defaultProps: props = {
    name: "button"
}
const LabButton = (props = defaultProps) => {
    return <Button variant="outlined">{props.name}</Button>
}
export default LabButton