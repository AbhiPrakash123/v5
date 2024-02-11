import { Paper, Box, Button } from "@mui/material"
import { useState } from "react";
import { FeatureBarProps } from "./featurebar";
import { Add, Delete } from "@mui/icons-material";
import EditableText from "@/components/editableText";

const FeatureBar = (props: FeatureBarProps) => {
    const { builder } = props
    const [ active, setActive ] = useState(0)
    const [features, setFeatures] = useState([
        { name: "lab 1", id: 0 },
        { name: "lab 2", id: 1 }
    ])
    const addFeature = () => {
        setFeatures(prev => [...prev, { name: "feature", id: prev.length + 1 }])
    }
    const add = (
        <Button onClick={addFeature}>
            <Add />
        </Button>
    )
    return (
        <Paper
            className=" tw-pr-3 tw-h-10 tw-border-t-0 tw-border-l-0 tw-border-r-0 tw-flex tw-justify-between"
        >
            {/* <Box>

            </Box> */}
            <Box className="tw-flex tw-items-center">
                {features.map((item, i) =>
                    <Paper
                        square
                        key={i}
                        sx={active === item.id?{ backgroundColor: "background.default" }:{backgroundColor: "background.paper"}}
                        className={`${active === item.id?"tw-border-b-0":""} tw-border-t-0 tw-border-l-0 tw-flex tw-h-full tw-items-center tw-cursor-pointer tw-min-w-32 tw-justify-center hover:tw-bg-blue-500 hover:tw-text-white`}
                        onClick={() => setActive(item.id)}
                    >
                        <EditableText defaultText={item.name} builder={builder} />
                        {builder ? <Delete /> : ""}
                    </Paper>
                )}
                {builder ? add : ""}
            </Box> 
            <Button variant="contained" color="error">Disconnect</Button>

        </Paper>
    )
}
export default FeatureBar;