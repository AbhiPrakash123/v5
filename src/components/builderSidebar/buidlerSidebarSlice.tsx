import { createSlice } from "@reduxjs/toolkit";

interface BuilderSidebar {
    isOpen: boolean,
}

export const BuilderSidebarSlice = createSlice({
    name: "builderSidebarSlice",
    initialState: {
        isOpen: false
    } as BuilderSidebar,
    reducers: {
        open(state) {
            state.isOpen = true
        },
        close(state) {
            state.isOpen = false
        },
        toggle(state) {
            state.isOpen = !state.isOpen
        }
    }
})

export const { open,close,toggle } = BuilderSidebarSlice.actions
export const isOpen = (state: { builderSidebar: BuilderSidebar }) => state.builderSidebar.isOpen
export default BuilderSidebarSlice.reducer
