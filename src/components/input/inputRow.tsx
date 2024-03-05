import { Box } from "@mui/material"
import inputs from '@/livebench/inputs';
const Invalid = () => {
    return (
        <span>invalid</span>
    )
}
const InputRow = (props: any) => {
    const { item } = props
    const inputElement: any = inputs.filter(ele => ele.uname === item.uname)
    const element = inputElement ? inputElement[0].element : Invalid
    const defaultFlex = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyItems: "center",
        justifyContent: "center"
    }
    return (
        <Box
            className=" tw-w-full tw-my-2 tw-min-h-[50px]"
            sx={defaultFlex}
        >
            {element()}
        </Box>
    )
}
export default InputRow