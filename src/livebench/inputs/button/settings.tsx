import {InputEditor} from "@/components/editorSidebar/editor"

const Settings = ({ uuid, configuration }: any) => {
    return (
        <>
        <InputEditor uuid={uuid} configuration={configuration} />
        </>
    )
}

export { Settings }