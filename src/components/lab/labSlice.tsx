import { createSlice } from "@reduxjs/toolkit";
import { generateUUID } from "@/utils";

interface LabType {
    lab: {
        title: string,
        organization: string,
        elements: any,
        labs: [
            {
                title: string,
                layout: {
                    input: Array<any>,
                    output: Array<any>
                }
            }
        ]
    },
    currentLab: number,
    breakpoint: "lg" | "md" | "sm"

}

export const LabSlice = createSlice({
    name: "Lab",

    initialState: {
        lab: {
            title: "",
            organization: "",
            elements: {},
            labs: [
                {
                    title: "",
                    layout: {
                        input: [],
                        output: []
                    }
                },
            ]
        },
        currentLab: 0,
        breakpoint: "lg"
    } as LabType,

    reducers: {
        loadLab(state, { payload }) {
            state.lab = payload.lab
        },
        addInput(state, { payload }) {
            const uuid = generateUUID()
            const { uname, configuration } = payload

            const data: any = {
                uname,
                configuration,
                component:"input"
            }
            state.lab.elements[uuid] = data
            let inData:any = { uuid }
            if(configuration.type === "container"){
                inData['elements'] = []
            }
            
            state.lab.labs[state.currentLab].layout.input = [...state.lab.labs[state.currentLab].layout.input, inData]

        },
        addOutput(state, { payload }) {

            const uuid = generateUUID()
            const { uname, configuration, layoutItem } = payload
            const { x, y, w, h } = layoutItem

            const data: any = {
                uname,
                configuration,
                component:"output",
                layout: {
                    'lg': { i: uuid, x, y, w: 6, h: 6 },
                    'md': { i: uuid, x, y, w: 8, h: 6 },
                    'sm': { i: uuid, x, y, w: 6, h: 6 },
                }
            }

            state.lab.elements[uuid] = data
            const inData = { uuid }
            state.lab.labs[state.currentLab].layout.output = [...state.lab.labs[state.currentLab].layout.output, inData]

        },
        addToContainer(state, { payload }) {
            const elementuuid = generateUUID()
            const { uuid, uname, configuration } = payload
            const data: any = {
                uname,
                configuration,
                component:"input"
            }

            state.lab.elements[elementuuid] = data

            const inData = { uuid: elementuuid }

            state.lab.labs[state.currentLab].layout.input = state.lab.labs[state.currentLab].layout.input.map((item,index) => {
                if (item.uuid === uuid) {
                    return { ...item,'elements': [...item.elements, inData]}
                }
                return item
            })

        },
        updateConfiguration(state, { payload }) {
            const { uuid, configuration } = payload
            state.lab.elements[uuid].configuration = configuration
        },
        updateLayout(state, { payload }) {
            const { uuid, breakpoint, layout } = payload
            state.lab.elements[uuid].layout[breakpoint] = layout
        },
        deleteElement(state, { payload }) {
            
        }
    }
})

export const {
    addInput,
    addOutput,
    addToContainer,
    updateConfiguration,
    updateLayout
} = LabSlice.actions

export const getLab = (state: {'lab': LabType}) => state.lab.lab
export const getAllElements = (state: {'lab': LabType}) => state.lab.lab.elements
// export const getAllElements = (state: {'lab': LabType}) => state.lab.lab.elements
export const getOutputs = (state: {'lab': LabType}) => state.lab.lab.labs[state.lab.currentLab].layout.output
export const getInputs = (state: {'lab': LabType}) => state.lab.lab.labs[state.lab.currentLab].layout.input
export default LabSlice.reducer
