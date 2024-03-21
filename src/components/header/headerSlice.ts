import { createSlice } from "@reduxjs/toolkit";

interface HeaderType {
    title: string,

}

export const HeaderSlice = createSlice({
    name: "header",
    initialState: {
        title: "board name"
    } as HeaderType,
    reducers: {
        setTitle(state, {payload}:any) {
            state.title = payload
        },
    }
})

export const { setTitle } = HeaderSlice.actions
export const getTitle = (state: { header: HeaderType }) => state.header.title
export default HeaderSlice.reducer