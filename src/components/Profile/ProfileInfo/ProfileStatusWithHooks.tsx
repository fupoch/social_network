
import { TextField } from '@mui/material'
import React, { ChangeEvent, useEffect, useState } from 'react'

type PropsType = {
  putProfileStatus: (status: string) => void  
  status: string
}
const  ProfileStatusWithHooks: React.FC<PropsType> = (props: PropsType) => {
  
  let [editMode, setEditMode] = useState(false)
  let [status, setStatus] = useState(props.status)
  useEffect( () => {
    setStatus(props.status)
  }, [props.status])

  const activateEditMode = () => {
    setEditMode(true)
  }
  const deactivateEditMode = () => {
    setEditMode(false)
    props.putProfileStatus(status)
  }
  const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.currentTarget.value );
  }

  return (
      <>
        {!editMode &&
          <div>
            <span onDoubleClick={activateEditMode} >{props.status || 'Статуса нет'}</span>
          </div>
        }   
        {editMode &&
          <div>
            <TextField fullWidth label="Status"  onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode}  value={status}/>
          </div>
        }
      </>
    )
}



export default ProfileStatusWithHooks