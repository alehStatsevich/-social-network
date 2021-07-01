import React, {useEffect, useState} from "react";

type StatusType = {
    status: string
    updateStatus: (status: string) => void
}

const ProfileStatusWithHooks = (props: StatusType) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)
    useEffect(()=>{
        setStatus(props.status);
    },[props.status])
    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    }
    const onStatusChange = (e: any) => {
        setStatus(e.currentTarget.value)
    }

    return <div>
        {!editMode &&
        <div>
            <span onDoubleClick={activateEditMode}>{props.status || "----"}</span>
        </div>
        }
        {editMode &&
        <div>
            <input onChange={onStatusChange} autoFocus={true} type={'text'} onBlur={deactivateEditMode}
                   value={status}/>
        </div>
        }
    </div>
}

export default ProfileStatusWithHooks;
