import React, { useEffect, useState } from 'react'


const  ProfileStatusWithHooks = (props) => {
  
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
  const onStatusChange = (e) => {
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
        <input  onChange={onStatusChange}  autoFocus={true} onBlur={deactivateEditMode}  value={status}/>
      </div>
      
      }
      </>
    )
  
}



export default ProfileStatusWithHooks