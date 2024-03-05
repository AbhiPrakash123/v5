import { Box, Typography,Divider } from "@mui/material"

export default function LabTitle() {
    return (
        <Box className=" tw-w-full tw-h-full tw-mb-3">
            <Typography component="div">
                <Box sx={{ textTransform: 'uppercase', fontWeight: 'medium' }}>Text Title</Box>
            </Typography>
            <Divider />
        </Box>
    )
}