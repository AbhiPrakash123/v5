import { Box, Typography, TextField } from "@mui/material"
const EditorTextbox = ({ name, value, callback, disable }: any) => {

    return (
        <Box className=" tw-w-full tw-flex tw-justify-center tw-items-center tw-p-3">
            {
                name ?
                    <Typography
                        sx={{ flex: "1 1 0" }}
                    >
                        {name}
                    </Typography>
                    :
                    ""
            }

            <TextField
                sx={{ flex: "1 1 0" }}
                value={value}
                name={name}
                size="small"
                disabled={disable ? true : false}
                onChange={callback}
            />
        </Box>
    )
}
export { EditorTextbox }