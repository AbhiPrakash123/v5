import { Check, Edit } from '@mui/icons-material';
import { useState, useRef } from 'react';
import { editableTextProps } from './editable';

const EditableText = (props: editableTextProps) => {

    const { builder,defaultText } = props
    const [title, setTitle] = useState(defaultText)
    const [edited, setEdited] = useState(false)
    const boardNameRef = useRef<HTMLSpanElement>(null)

    const editTitle = () => {
        if (boardNameRef.current) {
            boardNameRef.current.contentEditable = "true"
            boardNameRef.current.focus()
            boardNameRef.current.style.padding = "3px"
            // boardNameRef.current.style.border = "3px"
            setEdited(true)
        }
    }
    const saveTitle = () => {
        if (boardNameRef.current) {
            boardNameRef.current.contentEditable = "false"
            setEdited(false)
        }

    }


    const edit = edited ?
        <Check onClick={() => saveTitle()} className=' tw-mx-2 tw-cursor-pointer' /> :
        <Edit onClick={() => editTitle()} className=' tw-mx-2 tw-cursor-pointer' />

    return (
        <div className='tw-box-border tw-h-full tw-flex tw-items-center'>
            <span ref={boardNameRef}>
                {title}
            </span>
            {builder ? edit : ""}
        </div>
    )
}

export default EditableText;