import { Paper, Box, Button, Divider } from "@mui/material"
import { useState } from "react";
import { FeatureBarProps } from "./featurebar";
import { Add, Delete, Power } from "@mui/icons-material";
import EditableText from "@/components/editableText";

const FeatureBar = (props: FeatureBarProps) => {
    const { builder } = props
    const [active, setActive] = useState(0)
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
        <Box className="tw-h-full">
            <Box
                className=" tw-pr-3 tw-h-full tw-border-t-0 tw-border-l-0 tw-border-r-0 tw-flex tw-justify-between"
            >
                <Box className="tw-flex tw-items-center">
                    {features.map((item, i) =>
                        <Button
                            variant="outlined"
                            key={i}
                            sx={active === item.id ? { backgroundColor: "secondary.main", color: "white" } : {}}
                            className={` tw-flex tw-h-full tw-items-center tw-cursor-pointer tw-min-w-32 tw-justify-center`}
                            onClick={() => setActive(item.id)}
                        >
                            <EditableText defaultText={item.name} builder={builder} />
                            {builder ? <Delete /> : ""}
                        </Button>
                    )}
                    {builder ? add : ""}
                </Box>
                <Button variant="contained" color="error">Disconnect<Power /></Button>
            </Box>
            <Divider />
        </Box>
    )
}
export default FeatureBar;