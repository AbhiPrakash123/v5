import Editor from "@/components/editorSidebar/editor"

const Settings = ({ uuid, configuration }: any) => {
    return (
        <>
        <Editor uuid={uuid} configuration={configuration} />
        </>
    )
}

export { Settings }