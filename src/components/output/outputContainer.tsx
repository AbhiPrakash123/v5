import { Box } from "@mui/material"
import outputs from "@/livebench/outputs"
import { getOutputs } from "./outputBuilderSlice"
import { useAppSelector } from "@/store/hooks"
const Invalid = () => {
    return (
        <span>invalid</span>
    )
}

export default function OutputContainer(props: any){
    const { item } = props
    const storeOutputs = useAppSelector(getOutputs)
    const data: any = storeOutputs.filter((ele:any) => ele.uuid === item.id)
    const inputElement: any = outputs.filter(ele => ele.uname === data[0].uname)
    const Element = inputElement ? inputElement[0].element : Invalid
    return (
        <Box className=" tw-h-full tw-w-full tw-overflow-auto tw-box-border">
            <Element />
        </Box>
    )
}